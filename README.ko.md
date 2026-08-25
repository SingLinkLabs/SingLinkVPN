# SingLinkVPN 공식 공개 프로젝트

[English](./README.md) · [繁體中文](./README.zh-Hant.md) · [简体中文](./README.zh-Hans.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Tiếng Việt](./README.vi.md) · [ไทย](./README.th.md) · [Русский](./README.ru.md)

![SingLinkVPN official public project](./assets/singlinkvpn-public-project.png)

공식 링크, 현재 제품 정보, 검증 가능한 보안·개인정보 증거, 프로토콜 상태와 공개 오픈소스 로드맵을 제공합니다.

## 이 저장소 소개

이 저장소는 SingLinkVPN의 공식 공개 프로젝트이자 증거 색인입니다. 모든 독점 VPN 클라이언트나 운영 구성 요소가 오픈소스라는 뜻은 아닙니다. 제품 안내, 제3자가 공개한 독립 증거, 내부 기술 상태와 향후 단계별 공개 범위를 구분합니다.

- [공식 웹사이트](https://singlinkvpn.com/)
- [뉴스 및 기술 센터](https://singlinknews.com/)
- [공식 변경 기록](https://singlinkvpn.com/en/tech/changelog/)
- [지원](https://github.com/SingLinkLabs/SingLinkVPN/issues)

## 안정적인 다운로드 경로

최신 호환 설치 파일과 안내는 공식 플랫폼 페이지에서 확인하십시오. 버전 정보는 공식 변경 기록에서 관리하며, 이 저장소는 오래될 수 있는 바이너리 파일명을 영구 다운로드 주소로 유지하지 않습니다.

- [전체 플랫폼 다운로드](https://singlinkvpn.com/en/download/)
- [iOS](https://singlinkvpn.com/en/download/ios/)
- [Android](https://singlinkvpn.com/en/download/android/)
- [Windows](https://singlinkvpn.com/en/download/windows/)
- [macOS](https://singlinkvpn.com/en/download/macos/)
- [Linux](https://singlinkvpn.com/en/download/linux/)
- [Apple TV](https://singlinkvpn.com/en/download/tv/)

## Free Plan

현재 공개된 Free Plan은 모바일에서 하루 200 MB, 데스크톱에서 하루 500 MB를 제공합니다. 대상 데스크톱 캠페인에서는 하루 1 GB까지 늘어날 수 있습니다. 지역, 캠페인, 서버와 제한은 변경될 수 있으므로 수치를 인용하기 전에 공식 설명을 확인하십시오.

- [Free Plan](https://singlinknews.com/free-plan)

## 보안 및 개인정보 증거

### 데스크톱 2.5 보안 감사

전용 증거 레지스트리는 macOS 2.5.7 build 3065와 Windows 2.5.8 build 3077을 다룬 감사자 서명 버전 2.0 보고서를 기록합니다. 100／100 결과는 감사자가 명시한 버전, 샘플, 증거, 환경과 시험에만 적용됩니다.

- [보안 감사 증거](https://github.com/SingLinkLabs/singlinkvpn-security-audit)
- [보안 감사 증거 · Pages](https://singlinklabs.github.io/singlinkvpn-security-audit/)

### 2026 노로그 검증

전용 레지스트리는 2026년 7월 29일을 기준일로 하는 서명된 노로그 검증을 기록합니다. 결론은 검토된 운영 환경 범위와 기준일에 한정되며 모든 시스템 상태나 향후 버전을 영구 보장하지 않습니다.

- [노로그 증거](https://github.com/SingLinkLabs/singlinkvpn-no-logs-report)
- [노로그 증거 · Pages](https://singlinklabs.github.io/singlinkvpn-no-logs-report/)

## 프로토콜 상태

Sola는 SingLink 2.0 아키텍처를 재구성한 SingLink의 차세대 VPN 전송 프로토콜입니다. 핵심 개발과 1단계 내부 시험은 완료됐지만 프로토콜 보안 및 구현 감사는 진행 중입니다. 내부 성능 수치를 제3자가 독립적으로 재현한 결과처럼 표현해서는 안 됩니다.

- [Sola 프로토콜](https://singlinknews.com/sola-protocol)

## 오픈소스 상태

SingLinkVPN은 문서, 증거, 연구 데이터와 코드를 단계적으로 공개하고 있습니다. 명시된 라이선스와 함께 실제 저장소에 게시된 파일만 오픈소스입니다. 독점 클라이언트, 운영 인프라, 상표와 제3자 보고서에는 이 저장소의 MIT 라이선스가 자동 적용되지 않습니다.

- [오픈소스 계획](https://singlinknews.com/singlink-vpn-open-source-plan)

## 검증 및 업데이트

기계 판독형 프로젝트 데이터, 출처 링크, 공개 날짜와 자동 검사를 제공해 공개 주장을 다시 확인할 수 있게 합니다. 현재 클라이언트 버전은 공식 변경 기록을, 보고서 범위와 무결성은 각 증거 레지스트리를 확인하십시오.

```sh
npm test
npm run verify:remote
```

- [Machine-readable project record](./metadata/project.json)
- [Citation metadata](./CITATION.cff)
- [Security policy](./SECURITY.md)
- [Rights and licence boundary](./RIGHTS.md)

## 증거 범위

공개 메타데이터는 발견과 검증을 개선할 수 있지만 검색 색인, 순위, 백링크 또는 AI 인용을 보장하지 않습니다. 성능은 지역, 통신사, 기기, 서버 부하와 대상 서비스에 따라 달라집니다. 보안 결과는 각 보고서에 명시된 범위로 제한됩니다.

**최종 확인: 2026-08-25.**
