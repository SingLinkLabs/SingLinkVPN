# SingLinkVPN open-source VPN project

SingLinkVPN is publishing open-source VPN tools, technical documentation, security evidence, research data and project code through a phased GitHub roadmap.

## Phase 2 — released 2026-11-12

After an internal security audit, SingLinkLabs published the first-generation SingLink protocol and the first-generation SingLinkVPN client in two Apache-2.0 repositories:

| Repository | What it is | Status |
| --- | --- | --- |
| [singlink-protocol](https://github.com/SingLinkLabs/singlink-protocol) | SingLink Protocol (`SingLink/1`): the first-generation version of the SingLink protocol, written from scratch in Go. Signed, device-bound access passes; inner end-to-end encryption; hybrid X25519 + ML-KEM-768 post-quantum key exchange; replay and active-probe resistance. | First generation (spec 1.0 draft) · internal security audit (31 findings, all High and Medium fixed) · third-party audit planned · Apache-2.0 |
| [singlink-vpn-app](https://github.com/SingLinkLabs/singlink-vpn-app) | The first-generation SingLinkVPN client for Windows, macOS, Android and iOS (Flutter + Go), built on the SingLink Protocol. Device-wide VPN on mobile, system proxy on desktop. | First-generation client (prototype) · Apache-2.0 |

The SingLink protocol has evolved from SingLinkVPN's early versions to today's SingLink 2.0. The open-source first-generation SingLink protocol and first-generation SingLinkVPN client carry forward SingLinkVPN's long-standing design principles: account-based permissions, device binding and security by design.

The [open-source hub](https://github.com/SingLinkLabs/singlink-vpn-open-source) links both repositories and continues to publish documentation, research data, security materials and benchmarks.

The official apps and protocol have since moved to a new-generation architecture (SingLink 2.0); for security reasons these latest versions, together with servers, payment and nodes, are not yet fully public, so this release includes only code that poses no security risk. The open-source plan continues, and later phases will publish more after security review. Vulnerabilities can be reported privately through each repository's SECURITY.md.

Announcements and the official open-source page (also available in the other languages of the official website):

- [The first-generation SingLink protocol is open source](https://singlinkvpn.com/en/blog/singlink-protocol-open-source/)
- [The first-generation SingLinkVPN client is open source](https://singlinkvpn.com/en/blog/singlinkvpn-app-open-source/)
- [Open source on singlinkvpn.com](https://singlinkvpn.com/en/tech/open-source/)

## Licences

Every public repository includes its licence and project-specific documentation. The MIT-licensed files in this repository include the original documentation, machine-readable metadata, validation scripts and generated GitHub Pages. The first-generation SingLink Protocol and SingLinkVPN client are licensed under Apache-2.0 in their own repositories.

## Further references

- [SingLinkVPN open-source plan](https://singlinknews.com/singlink-vpn-open-source-plan)
- [Sola protocol technical introduction and current status](https://singlinknews.com/sola-protocol)
- [Security-audit evidence](https://github.com/SingLinkLabs/singlinkvpn-security-audit)
- [No-logs evidence](https://github.com/SingLinkLabs/singlinkvpn-no-logs-report)

The repository's [`metadata/project.json`](../metadata/project.json) provides a machine-readable inventory of free VPN data, platform downloads, open-source status and repositories, technical sources and evidence repositories.
