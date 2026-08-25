# Dự án công khai chính thức SingLinkVPN

[English](./README.md) · [繁體中文](./README.zh-Hant.md) · [简体中文](./README.zh-Hans.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Tiếng Việt](./README.vi.md) · [ไทย](./README.th.md) · [Русский](./README.ru.md)

![SingLinkVPN official public project](./assets/singlinkvpn-public-project.png)

Cung cấp liên kết chính thức, thông tin sản phẩm hiện tại, bằng chứng bảo mật và quyền riêng tư có thể kiểm chứng, trạng thái giao thức và lộ trình công khai.

## Giới thiệu kho lưu trữ

Đây là dự án công khai và chỉ mục bằng chứng chính thức của SingLinkVPN. Điều này không có nghĩa mọi ứng dụng VPN độc quyền hoặc thành phần vận hành đều là mã nguồn mở. Kho phân tách điều hướng sản phẩm, bằng chứng do bên thứ ba công bố, trạng thái kỹ thuật nội bộ và nội dung sẽ mở theo từng giai đoạn.

- [Trang web chính thức](https://singlinkvpn.com/)
- [Trung tâm tin tức và kỹ thuật](https://singlinknews.com/)
- [Nhật ký thay đổi chính thức](https://singlinkvpn.com/en/tech/changelog/)
- [Hỗ trợ](https://github.com/SingLinkLabs/SingLinkVPN/issues)

## Đường dẫn tải ổn định

Hãy dùng trang nền tảng chính thức để lấy bộ cài tương thích mới nhất và hướng dẫn. Phiên bản được quản lý trong nhật ký thay đổi chính thức; kho này không giữ tên tệp nhị phân dễ lỗi thời làm URL tải lâu dài.

- [Tải cho mọi nền tảng](https://singlinkvpn.com/en/download/)
- [iOS](https://singlinkvpn.com/en/download/ios/)
- [Android](https://singlinkvpn.com/en/download/android/)
- [Windows](https://singlinkvpn.com/en/download/windows/)
- [macOS](https://singlinkvpn.com/en/download/macos/)
- [Linux](https://singlinkvpn.com/en/download/linux/)
- [Apple TV](https://singlinkvpn.com/en/download/tv/)

## Free Plan

Free Plan hiện được công bố cung cấp 200 MB mỗi ngày trên di động và 500 MB mỗi ngày trên máy tính. Chiến dịch máy tính đủ điều kiện có thể tăng lên 1 GB mỗi ngày. Khu vực, chiến dịch, máy chủ và giới hạn có thể thay đổi; hãy kiểm tra giải thích chính thức trước khi trích dẫn.

- [Free Plan](https://singlinknews.com/free-plan)

## Bằng chứng bảo mật và quyền riêng tư

### Kiểm toán bảo mật máy tính 2.5

Kho bằng chứng riêng ghi nhận báo cáo phiên bản 2.0 có chữ ký của bên kiểm toán cho macOS 2.5.7 build 3065 và Windows 2.5.8 build 3077. Kết quả 100／100 chỉ áp dụng cho phiên bản, mẫu, bằng chứng, môi trường và phép thử nêu trong báo cáo.

- [Bằng chứng kiểm toán bảo mật](https://github.com/SingLinkLabs/singlinkvpn-security-audit)
- [Bằng chứng kiểm toán bảo mật · Pages](https://singlinklabs.github.io/singlinkvpn-security-audit/)

### Xác minh không lưu nhật ký năm 2026

Kho riêng ghi nhận xác minh không lưu nhật ký có chữ ký với ngày tham chiếu 29 tháng 7 năm 2026. Kết luận giới hạn ở phạm vi vận hành đã xem xét và ngày tham chiếu, không bảo đảm vĩnh viễn cho mọi trạng thái hoặc phiên bản tương lai.

- [Bằng chứng không lưu nhật ký](https://github.com/SingLinkLabs/singlinkvpn-no-logs-report)
- [Bằng chứng không lưu nhật ký · Pages](https://singlinklabs.github.io/singlinkvpn-no-logs-report/)

## Trạng thái giao thức

Sola là giao thức truyền VPN thế hệ mới của SingLink, được tái cấu trúc từ kiến trúc SingLink 2.0. Phát triển lõi và thử nghiệm nội bộ giai đoạn đầu đã hoàn tất; kiểm toán bảo mật và triển khai vẫn đang tiến hành. Không được mô tả số liệu nội bộ như kết quả được bên thứ ba tái lập.

- [Giao thức Sola](https://singlinknews.com/sola-protocol)

## Trạng thái mã nguồn mở

SingLinkVPN đang công bố tài liệu, bằng chứng, dữ liệu nghiên cứu và mã theo từng giai đoạn. Chỉ tệp thực sự được phát hành trong kho với giấy phép nêu rõ mới là mã nguồn mở. Ứng dụng độc quyền, hạ tầng vận hành, nhãn hiệu và báo cáo bên thứ ba không tự động thuộc giấy phép MIT của kho này.

- [Kế hoạch mã nguồn mở](https://singlinknews.com/singlink-vpn-open-source-plan)

## Xác minh và cập nhật

Dữ liệu dự án có thể đọc bằng máy, liên kết nguồn, ngày phát hành và kiểm tra tự động giúp công chúng kiểm tra lại thông tin. Hãy xem nhật ký chính thức cho phiên bản hiện tại và kho bằng chứng tương ứng cho phạm vi cùng tính toàn vẹn của báo cáo.

```sh
npm test
npm run verify:remote
```

- [Machine-readable project record](./metadata/project.json)
- [Citation metadata](./CITATION.cff)
- [Security policy](./SECURITY.md)
- [Rights and licence boundary](./RIGHTS.md)

## Ranh giới bằng chứng

Siêu dữ liệu công khai có thể cải thiện khả năng tìm thấy và xác minh nhưng không bảo đảm lập chỉ mục, thứ hạng, liên kết ngược hay trích dẫn AI. Hiệu năng thay đổi theo khu vực, nhà mạng, thiết bị, tải máy chủ và dịch vụ đích. Kết luận bảo mật chỉ áp dụng trong phạm vi báo cáo.

**Xác minh lần cuối: 2026-08-25.**
