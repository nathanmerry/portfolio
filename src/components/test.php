<?php
header('Content-Type: text/html; charset=utf-8');
include_once __DIR__ . '/translations.php';
include_once __DIR__ . '/PageLoader.php';

$countryToLang = ["DE" => "DE", "CH" => "DE", "AT" => "DE", "CA" => "EN", "FR" => "FR", "BE" => "FR", "DEFAULT" => "EN"];
$detectedCountry = 'DEFAULT';
if (!empty($_SERVER['HTTP_CF_IPCOUNTRY'])) {
    $detectedCountry = strtoupper($_SERVER['HTTP_CF_IPCOUNTRY']);
} elseif (!empty($_SERVER['GEOIP_COUNTRY_CODE'])) {
    $detectedCountry = strtoupper($_SERVER['GEOIP_COUNTRY_CODE']);
} elseif (!empty($_SERVER['HTTP_X_COUNTRY_CODE'])) {
    $detectedCountry = strtoupper($_SERVER['HTTP_X_COUNTRY_CODE']);
}
$langKey = array_key_exists($detectedCountry, $countryToLang) ? $countryToLang[$detectedCountry] : $countryToLang['DEFAULT'];
if (!array_key_exists($langKey, $translations)) {
    $langKey = 'DEFAULT';
}
$t = $translations[$langKey];
if (function_exists('setlocale') && isset($t['locale'])) {
    setlocale(LC_TIME, $t['locale']);
}
$monthYear = strftime('%B %Y');
$year = date('Y');
$title = str_replace('%monthYear%', $monthYear, $t['title']);
$title = str_replace('%year%', $year, $title);
$listFile = isset($_GET['list']) ? $_GET['list'] : 'offers';
$jsonPath = __DIR__ . "/../../add/list/{$listFile}.json";
$offers = [];
if (file_exists($jsonPath)) {
    $offers = json_decode(file_get_contents($jsonPath), true);
} else {
    exit;
}
function renderStars($rating)
{
    $val = floatval($rating);
    if ($val > 5) {
        $val = 5;
    }
    if ($val < 0) {
        $val = 0;
    }
    $full = floor($val);
    $half = (ceil($val) - $full == 1 && ($val - $full) > 0);
    $rest = 5 - ($full + ($half ? 1 : 0));
    $output = '<div class="flex space-x-1">';
    for ($i = 0; $i < $full; $i++) {
        $output .= '<div class="text-yelloworange"><svg class="w-6 h-6" viewBox="0,0,24,24" fill="currentColor"><path d="M12 .587l3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0 9.306l8.332-1.151z"/></svg></div>';
    }
    if ($half) {
        $output .= '<div class="w-6 text-yelloworange">
 <svg class="w-full h-full" viewBox="0,0,24,24" fill="currentColor">
 <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27L12 17.178V5.173zm0-4.586L8.332 8.155 0 9.306l6.064 5.828-1.48 8.279L12 19.446l7.416 3.966-1.48-8.279L24 9.306l-8.332-1.15L12 .587z"></path>
 </svg>
</div>';
    }
    for ($j = 0; $j < $rest; $j++) {
        $output .= '<div class="w-6 text-yelloworange">
 <svg class="w-full h-full" viewBox="0,0,24,24" fill="currentColor">
 <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27L12 17.178l-4.721 2.525.942-5.27-3.861-3.71 5.305-.733L12 5.173zm0-4.586L8.332 8.155 0 9.306l6.064 5.828-1.48 8.279L12 19.446l7.416 3.966-1.48-8.279L24 9.306l-8.332-1.15L12 .587z"></path>
 </svg>
</div>';
    }
    $output .= '</div>';
    return $output;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.min.css">
    <link rel="stylesheet" href="wpda_public.css">
    <link rel="stylesheet" href="styles.d.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <title><?php echo $title; ?></title>
</head>

<body class="font-sans bg-white">
    <header class="shadow header-bg">
        <div class="container flex items-center max-w-5xl px-4 py-2 mx-auto lg:px-0">
            <div class="flex items-center justify-center sm:justify-between">
                <img src="logo3.png" class="object-contain object-left" width="90px">
            </div>
        </div>
    </header>
    <section>
        <div class="container max-w-5xl px-4 py-8 mx-auto lg:px-0">
            <div>
                <h1 class="text-4xl font-extrabold text-[#2563EB]"><?php echo $title; ?></h1>
                <div class="mt-4">
                    <p><?php echo $t['intro_paragraph']; ?></p>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-gray-100">
        <div class="container max-w-5xl px-4 py-2 mx-auto my-8 lg:px-0">
            <?php foreach ($offers as $index => $of): ?>
                <?php
                $score = $of['score'] ?? '4.5';
                $stars = renderStars($of['stars'] ?? $score);
                $features = is_array($of['features']) ? $of['features'] : [];
                $link = $of['offerLink'] ?? '#';
                $logo = $of['logo'] ?? 'placeholder.png';
                $reviews = $of['reviews'] ?? '0';
                $ribbon = ($index === 0 && !empty($of['ribbon'])) ? $of['ribbon'] : '';
                ?>

                <div class="relative z-20 pt-4 mb-6 text-sm bg-white border rounded-lg shadow-lg text-warmGray-800 best-tag">
                    <?php if ($ribbon): ?>
                        <div class="absolute top-0 left-0 z-30 px-4 py-2 -mt-2 -ml-3 text-xl italic font-bold text-white bg-[#2563EB]">
                            <?= htmlspecialchars($ribbon) ?>
                        </div>
                    <?php endif; ?>

                    <div class="flex flex-wrap items-center justify-between px-2 pt-10 pb-6">
                        <!-- Logo Section -->
                        <div class="flex items-center justify-center w-1/2 p-2 lg:w-1/5">
                            <div class="relative w-full bg-white border">
                                <a href="<?= htmlspecialchars($link) ?>" target="_blank">
                                    <img src="<?= htmlspecialchars($logo) ?>" class="w-full h-full border" width="192" height="98">
                                </a>
                            </div>
                        </div>

                        <!-- Features Section -->
                        <div class="flex-col justify-center hidden w-1/2 px-2 lg:flex lg:w-1/4">
                            <?php foreach ($features as $feat): ?>
                                <div class="flex mb-4 leading-tight">
                                    <div class="w-5 mr-2">
                                        <div class="w-5 p-1 text-white rounded-full bg-lightgreen">
                                            <svg class="w-full" aria-hidden="true" data-prefix="fas" data-icon="check" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="flex"><?= htmlspecialchars($feat) ?></div>
                                </div>
                            <?php endforeach; ?>
                        </div>

                        <!-- Rating Section -->
                        <div class="flex items-center w-1/2 lg:w-1/5">
                            <div class="flex flex-col items-center w-full leading-6">
                                <div class="flex justify-center mb-2"><?= $stars ?></div>
                                <span class="block px-3 py-2 text-2xl font-extrabold text-white bg-[#2563EB] rounded-lg"><?= htmlspecialchars($score) ?></span>
                                <div class="mt-1 text-center">
                                    <strong><?= htmlspecialchars($reviews) ?></strong> reviews
                                </div>
                            </div>
                        </div>

                        <!-- Action Section -->
                        <div class="flex-col items-center justify-center w-full p-2 text-center lg:flex lg:w-1/4">
                            <a href="<?= htmlspecialchars($link) ?>"
                                class="relative flex items-center justify-center w-full px-3 py-3 mb-2 overflow-hidden text-center text-white duration-150 bg-[#ff9900] rounded-lg lg:mb-4 hover:bg-[#f0a12b]"
                                target="_blank">
                                <span class="text-2xl font-semibold pointer-events-none">Jetzt Handeln</span>
                            </a>
                            <span class="text-xs text-center">
                                <?= htmlspecialchars($of['minDeposit'] ?? '€250 Mindesteinzahlung') ?>
                            </span>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </section>
    <section>
        <div class="container max-w-5xl px-4 py-2 mx-auto lg:px-0">
            <div>
                <h1 class="mt-4 text-3xl font-extrabold"><?php echo $t['compare_title']; ?></h1>
                <div class="mt-4 prose max-w-screen-2xl content">
                    <?php echo $t['compare_text_html']; ?>
                </div>
            </div>
        </div>
    </section>
    <div class="py-4 text-white bg-gray-900">
        <div class="container max-w-5xl px-4 py-2 mx-auto lg:px-0">
            <div style="padding-left:40px;" class="text-center">
                <ul>
                    <a href="https://educate-to-thrive.com/terms" style="padding:0 10px;">Terms And Conditions</a>
                    <a href="https://educate-to-thrive.com/disclaimer-d" style="padding:0 10px;">Disclaimer</a>
                </ul>
            </div>
        </div>
    </div>
    <div id="risk-banner" style="position:fixed;bottom:0;width:100%;background-color:#FFFBEB;border-top:1px solid #FCD34D;padding:16px;color:#1F2937;box-shadow:0 -4px 6px -1px rgba(0,0,0,0.1);z-index:1000;">
        <div style="max-width:1200px;margin:0 auto;position:relative;">
            <button id="close-banner" style="position:absolute;top:-8px;right:0;background:none;border:none;font-size:1.5rem;cursor:pointer;color:#4B5563;">×</button>
            <div style="display:flex;flex-direction:column;font-size:0.875rem;">
                <div style="margin-bottom:8px;">
                    <strong><?php echo $t['banner_risk']; ?></strong>
                </div>
                <div class="risk-text"><?php echo $t['banner_risk_text']; ?></div>
                <a href="https://educate-to-thrive.com/terms" style="color:#2563EB;text-decoration:none;font-weight:500;margin-top:8px;font-size:0.875rem;"><?php echo $t['learn_more']; ?></a>
            </div>
        </div>
    </div>
    <script>
        document.getElementById('close-banner').addEventListener('click', function() {
            document.getElementById('risk-banner').style.display = 'none';
        });
    </script>
</body>

</html>