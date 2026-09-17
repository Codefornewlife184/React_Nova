<?php
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: no-referrer');

$httpOrigin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
$allowedOrigins = [
    'http://localhost:3000',
    'http://localhost',
];

if (!empty($httpOrigin)) {
    $host = parse_url($httpOrigin, PHP_URL_HOST);
    $isLocalhost = ($host === 'localhost');
    $isSameHost = isset($_SERVER['HTTP_HOST']) && $host === $_SERVER['HTTP_HOST'];
    if ($isLocalhost || $isSameHost || in_array($httpOrigin, $allowedOrigins, true)) {
        header('Access-Control-Allow-Origin: ' . $httpOrigin);
    }
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Access-Control-Max-Age: 86400');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Method Not Allowed'], JSON_UNESCAPED_UNICODE);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'Geçersiz istek.'], JSON_UNESCAPED_UNICODE);
    exit;
}

function take($arr, $key, $max = 500) {
    if (!isset($arr[$key]) || !is_string($arr[$key])) return '';
    $v = trim($arr[$key]);
    if (mb_strlen($v, 'UTF-8') > $max) $v = mb_substr($v, 0, $max, 'UTF-8');
    return $v;
}

$name    = take($data, 'name', 120);
$phone   = take($data, 'phone', 40);
$email   = take($data, 'email', 200);
$subject = take($data, 'subject', 200);
$message = take($data, 'message', 5000);
$lang    = take($data, 'lang', 8);
$page    = take($data, 'page', 500);

$errors = [];
if ($name === '' || mb_strlen($name, 'UTF-8') < 2) $errors[] = 'Ad alanı geçersiz.';
if (!preg_match('/^[+\d\s()-]{7,20}$/', $phone)) $errors[] = 'Telefon numarası geçersiz.';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'E-posta adresi geçersiz.';
if ($subject === '') $errors[] = 'Konu alanı boş olamaz.';
if (mb_strlen($message, 'UTF-8') < 10) $errors[] = 'Mesaj en az 10 karakter olmalı.';

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => implode(' ', $errors)], JSON_UNESCAPED_UNICODE);
    exit;
}

$rateDir = __DIR__ . '/.rate';
if (!is_dir($rateDir)) {
    @mkdir($rateDir, 0755, true);
}
$ip = isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 'unknown';
$safeIp = preg_replace('/[^a-zA-Z0-9_\-.]/', '_', $ip);
$rateFile = $rateDir . '/' . $safeIp . '.txt';
$now = time();
if (is_file($rateFile)) {
    $last = (int)@file_get_contents($rateFile);
    if ($now - $last < 20) {
        http_response_code(429);
        echo json_encode(['ok' => false, 'message' => 'Çok hızlı denediniz. Lütfen biraz bekleyip tekrar deneyin.'], JSON_UNESCAPED_UNICODE);
        exit;
    }
}
@file_put_contents($rateFile, (string)$now);

require_once __DIR__ . '/../PHPMailer/src/Exception.php';
require_once __DIR__ . '/../PHPMailer/src/PHPMailer.php';
require_once __DIR__ . '/../PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->SMTPDebug   = 0;
    $mail->SMTPAuth    = true;
    $mail->SMTPSecure  = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Host        = 'shanks.trdns.com';
    $mail->Port        = 465;
    $mail->Username    = 'info@ozelnovasurucukursu.com';
    $mail->Password    = 'h[{QRAVHKYxA=j3I';
    $mail->CharSet     = PHPMailer::CHARSET_UTF8;

    $mail->setFrom('info@ozelnovasurucukursu.com', 'Nova Sürücü Kursu - İletişim Formu');
    $mail->addAddress('info@ozelnovasurucukursu.com', 'Nova Sürücü Kursu');

    $mail->addReplyTo($email, $name);

    $subjectPrefix = ($lang === 'en') ? 'Contact Form' : 'İletişim Formu';
    $mail->Subject = '[' . $subjectPrefix . '] ' . $subject;

    $langLabel = ($lang === 'en') ? 'Language' : 'Dil';
    $nameLabel = ($lang === 'en') ? 'Name' : 'Ad';
    $phoneLabel = ($lang === 'en') ? 'Phone' : 'Telefon';
    $emailLabel = ($lang === 'en') ? 'Email' : 'E-posta';
    $subjectLabel = ($lang === 'en') ? 'Subject' : 'Konu';
    $messageLabel = ($lang === 'en') ? 'Message' : 'Mesaj';
    $pageLabel = ($lang === 'en') ? 'Page' : 'Sayfa';

    $bodyText  = "$nameLabel: $name\n";
    $bodyText .= "$phoneLabel: $phone\n";
    $bodyText .= "$emailLabel: $email\n";
    $bodyText .= "$subjectLabel: $subject\n";
    $bodyText .= "$langLabel: $lang\n";
    if ($page !== '') $bodyText .= "$pageLabel: $page\n";
    $bodyText .= "\n$messageLabel:\n$message\n";

    $bodyHtml  = "<html><body style=\"font-family:Arial,sans-serif;font-size:14px;color:#231f20;\">";
    $bodyHtml .= "<h2 style=\"color:#beab74;margin:0 0 12px;\">$subjectPrefix</h2>";
    $bodyHtml .= "<table border=\"0\" cellspacing=\"0\" cellpadding=\"6\" style=\"border-collapse:collapse;\">";
    $bodyHtml .= "<tr><td style=\"width:120px;font-weight:700;\">$nameLabel:</td><td>" . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . "</td></tr>";
    $bodyHtml .= "<tr><td style=\"font-weight:700;\">$phoneLabel:</td><td>" . htmlspecialchars($phone, ENT_QUOTES, 'UTF-8') . "</td></tr>";
    $bodyHtml .= "<tr><td style=\"font-weight:700;\">$emailLabel:</td><td>" . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . "</td></tr>";
    $bodyHtml .= "<tr><td style=\"font-weight:700;\">$subjectLabel:</td><td>" . htmlspecialchars($subject, ENT_QUOTES, 'UTF-8') . "</td></tr>";
    $bodyHtml .= "<tr><td style=\"font-weight:700;\">$langLabel:</td><td>" . htmlspecialchars($lang, ENT_QUOTES, 'UTF-8') . "</td></tr>";
    if ($page !== '') {
        $bodyHtml .= "<tr><td style=\"font-weight:700;\">$pageLabel:</td><td>" . htmlspecialchars($page, ENT_QUOTES, 'UTF-8') . "</td></tr>";
    }
    $bodyHtml .= "</table>";
    $bodyHtml .= "<h3 style=\"margin:16px 0 6px;\">$messageLabel:</h3>";
    $bodyHtml .= "<div style=\"white-space:pre-wrap;line-height:1.6;background:#f7f7f7;padding:12px;border-radius:8px;\">" . htmlspecialchars($message, ENT_QUOTES, 'UTF-8') . "</div>";
    $bodyHtml .= "</body></html>";

    $mail->Body    = $bodyHtml;
    $mail->AltBody = $bodyText;
    $mail->isHTML(true);

    $sent = $mail->send();
    if ($sent) {
        http_response_code(200);
        $okMsg = ($lang === 'en')
            ? 'Your message has been sent successfully.'
            : 'Mesajınız başarıyla gönderildi.';
        echo json_encode(['ok' => true, 'message' => $okMsg], JSON_UNESCAPED_UNICODE);
    } else {
        http_response_code(500);
        $errMsg = ($lang === 'en')
            ? 'An error occurred while sending the mail.'
            : 'E-posta gönderimi sırasında hata oluştu.';
        echo json_encode(['ok' => false, 'message' => $errMsg], JSON_UNESCAPED_UNICODE);
    }
} catch (Exception $e) {
    http_response_code(500);
    $safeError = 'Mailer Error';
    $errMsg = ($lang === 'en')
        ? 'An error occurred while sending the mail. Please try again later.'
        : 'E-posta gönderimi sırasında hata oluştu. Lütfen daha sonra tekrar deneyin.';
    error_log('ContactForm SMTP Error: ' . $e->getMessage());
    echo json_encode(['ok' => false, 'message' => $errMsg, 'debug' => $safeError], JSON_UNESCAPED_UNICODE);
}
