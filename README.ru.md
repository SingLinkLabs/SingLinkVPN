# SingLinkVPN — бесплатный VPN и проект VPN с открытым кодом

[English](./README.md) · [繁體中文](./README.zh-Hant.md) · [简体中文](./README.zh-Hans.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Tiếng Việt](./README.vi.md) · [ไทย](./README.th.md) · [Русский](./README.ru.md)

![Бесплатный VPN · Открытый проект](./assets/covers/ru.png)

Ежедневный бесплатный VPN-трафик, официальные приложения для основных платформ, проекты с открытым кодом, аудит безопасности, проверка no-logs и исследования протокола.

## Бесплатный VPN для телефона и компьютера

SingLinkVPN предоставляет ежедневный бесплатный VPN-трафик пользователям мобильных и настольных устройств. Этот проект GitHub объединяет официальные загрузки, открытые инструменты, техническую документацию, аудит безопасности, проверку no-logs и исследования Sola.

- [Официальный сайт](https://singlinkvpn.com/)
- [Центр новостей и технологий](https://singlinknews.com/)
- [Официальный журнал изменений](https://singlinkvpn.com/en/tech/changelog/)
- [Поддержка](https://github.com/SingLinkLabs/SingLinkVPN/issues)

## Скачать SingLinkVPN

На официальных страницах платформ доступны актуальные приложения SingLinkVPN, инструкции по установке и сведения о выпусках для Windows, macOS, iOS, Android, Linux и Apple TV.

- [Загрузки для всех платформ](https://singlinkvpn.com/en/download/)
- [iOS](https://singlinkvpn.com/en/download/ios/)
- [Android](https://singlinkvpn.com/en/download/android/)
- [Windows](https://singlinkvpn.com/en/download/windows/)
- [macOS](https://singlinkvpn.com/en/download/macos/)
- [Linux](https://singlinkvpn.com/en/download/linux/)
- [Apple TV](https://singlinkvpn.com/en/download/tv/)

## Бесплатный VPN-план

Free Plan SingLinkVPN предоставляет 200 МБ бесплатного VPN-трафика в день на мобильных устройствах и 500 МБ в день на компьютерах. Подходящие кампании для компьютеров предоставляют до 1 ГБ в день.

- [Бесплатный VPN-план](https://singlinknews.com/free-plan)

## Доказательства безопасности и конфиденциальности

### Аудит безопасности настольной версии 2.5

Настольная версия SingLinkVPN 2.5 прошла сторонний аудит безопасности для macOS 2.5.7 build 3065 и Windows 2.5.8 build 3077 с опубликованной оценкой 100／100. Подписанный отчёт и записи целостности размещены в репозитории аудита.

- [Доказательства аудита безопасности](https://github.com/SingLinkLabs/singlinkvpn-security-audit)
- [Доказательства аудита безопасности · Pages](https://singlinklabs.github.io/singlinkvpn-security-audit/)

### Проверка no-logs 2026

SingLinkVPN прошёл проверку no-logs 2026 с контрольной датой 29 июля 2026 года. Подписанный отчёт и файлы проверки опубликованы в отдельном репозитории доказательств.

- [Доказательства no-logs](https://github.com/SingLinkLabs/singlinkvpn-no-logs-report)
- [Доказательства no-logs · Pages](https://singlinklabs.github.io/singlinkvpn-no-logs-report/)

## VPN-протокол Sola

Sola — VPN-протокол передачи нового поколения, архитектура которого переработана на основе SingLink 2.0. Основная разработка и первый этап испытаний завершены, проект перешёл к проверке безопасности протокола и реализации.

- [Протокол Sola](https://singlinknews.com/sola-protocol)

## Проект VPN с открытым кодом

12 ноября 2026 года вышел второй этап открытого проекта SingLinkVPN. После проверки безопасности, конфиденциальности и лицензий SingLinkLabs опубликовала первый исходный код продуктов в двух репозиториях под лицензией Apache-2.0, а центральный репозиторий открытого кода теперь ссылается на оба.

- **[SingLink Protocol](https://github.com/SingLinkLabs/singlink-protocol)** · Apache-2.0 — SingLink/1 — открытый прокси- и VPN-протокол, написанный с нуля на Go (черновик 1.0): подписанные пропуска доступа с привязкой к устройству, внутреннее сквозное шифрование, гибридный постквантовый обмен ключами X25519 + ML-KEM-768, защита от повторного воспроизведения и активного зондирования. Внутренняя проверка безопасности выявила 31 замечание; все замечания уровней High и Medium исправлены.
- **[Прототип приложения SingLinkVPN](https://github.com/SingLinkLabs/singlink-vpn-app)** · Apache-2.0 — Создан на Flutter и Go поверх SingLink Protocol для Windows, macOS, Android и iOS: VPN для всего устройства на мобильных платформах и системный прокси на компьютерах. Этот прототип первого поколения отделён от официальных приложений из центра загрузок и магазинов приложений.
- **[Центральный репозиторий открытого кода](https://github.com/SingLinkLabs/singlink-vpn-open-source)** — Обзор этапов, публичная документация, исследовательские данные, материалы по безопасности и бенчмарки в одном месте.

Официальные приложения SingLinkVPN, серверы, платёжная часть, узлы и ядро протокола SingLink 2.0 остаются закрытыми. Открытый протокол прошёл внутреннюю проверку безопасности; независимого аудита и полевых испытаний в материковом Китае пока не проводилось. Об уязвимостях сообщайте конфиденциально по инструкции из SECURITY.md в каждом репозитории.

- [Анонс: SingLink Protocol стал открытым](https://singlinkvpn.com/ru/blog/singlink-protocol-open-source/)
- [Анонс: прототип приложения SingLinkVPN стал открытым](https://singlinkvpn.com/ru/blog/singlinkvpn-app-open-source/)
- [Открытый код на официальном сайте](https://singlinkvpn.com/ru/tech/open-source/)
- [План открытого кода](https://singlinknews.com/singlink-vpn-open-source-plan)

## Данные проекта и обновления

Машиночитаемые данные, ссылки на источники, даты выпуска и автоматические проверки помогают находить и проверять загрузки, бесплатный план, материалы аудита и статус протокола.

```sh
npm test
npm run verify:remote
```

- [Machine-readable project record](./metadata/project.json)
- [Citation metadata](./CITATION.cff)
- [Security policy](./SECURITY.md)
- [Rights and licence boundary](./RIGHTS.md)

## Почему выбирают SingLinkVPN

SingLinkVPN объединяет ежедневный бесплатный VPN-трафик, широкую поддержку платформ, публичные доказательства безопасности, проверку no-logs, открытые проекты и исследования VPN-протоколов.

**Последняя проверка: 2026-08-26.**
