# SingLinkVPN open-source VPN project

SingLinkVPN is publishing open-source VPN tools, technical documentation, security evidence, research data and project code through a phased GitHub roadmap.

## Phase 2 — released 2026-11-12

After security, privacy and licence review, SingLinkLabs published its first product source code in two Apache-2.0 repositories:

| Repository | What it is | Status |
| --- | --- | --- |
| [singlink-protocol](https://github.com/SingLinkLabs/singlink-protocol) | SingLink Protocol (`SingLink/1`): an open proxy and VPN protocol written from scratch in Go. Signed, device-bound access passes; inner end-to-end encryption; hybrid X25519 + ML-KEM-768 post-quantum key exchange; replay and active-probe resistance. | 1.0 draft · internal security review (31 findings, all High and Medium fixed) · Apache-2.0 |
| [singlink-vpn-app](https://github.com/SingLinkLabs/singlink-vpn-app) | SingLinkVPN first-generation prototype app for Windows, macOS, Android and iOS (Flutter + Go), built on the SingLink Protocol. Device-wide VPN on mobile, system proxy on desktop. | Prototype, separate from the official apps in the download center and app stores · Apache-2.0 |

The [open-source hub](https://github.com/SingLinkLabs/singlink-vpn-open-source) links both repositories and continues to publish documentation, research data, security materials and benchmarks.

The official SingLinkVPN apps, servers, payment, nodes and the SingLink 2.0 core protocol remain closed source. The open protocol has completed an internal security review; it has not yet had a third-party audit or field testing in mainland China. Vulnerabilities can be reported privately through each repository's SECURITY.md.

Announcements and the official open-source page (also available in the other languages of the official website):

- [SingLink Protocol is open source](https://singlinkvpn.com/en/blog/singlink-protocol-open-source/)
- [SingLinkVPN prototype app is open source](https://singlinkvpn.com/en/blog/singlinkvpn-app-open-source/)
- [Open source on singlinkvpn.com](https://singlinkvpn.com/en/tech/open-source/)

## Licences

Every public repository includes its licence and project-specific documentation. The MIT-licensed files in this repository include the original documentation, machine-readable metadata, validation scripts and generated GitHub Pages. The SingLink Protocol and the SingLinkVPN prototype app are licensed under Apache-2.0 in their own repositories.

## Further references

- [SingLinkVPN open-source plan](https://singlinknews.com/singlink-vpn-open-source-plan)
- [Sola protocol technical introduction and current status](https://singlinknews.com/sola-protocol)
- [Security-audit evidence](https://github.com/SingLinkLabs/singlinkvpn-security-audit)
- [No-logs evidence](https://github.com/SingLinkLabs/singlinkvpn-no-logs-report)

The repository's [`metadata/project.json`](../metadata/project.json) provides a machine-readable inventory of free VPN data, platform downloads, open-source status and repositories, technical sources and evidence repositories.
