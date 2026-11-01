export type Service = {
  id: string;
  group: string;
  title: string;
  icon: string;
  short: string;
  items: string[];
};

export const serviceGroups = [
  "FACEBOOK SOLUTIONS",
  "TIKTOK SOLUTIONS",
  "SOCIAL MEDIA GROWTH",
  "DIGITAL SERVICES",
];

export const services: Service[] = [
  {
    id: "fb-recovery",
    group: "FACEBOOK SOLUTIONS",
    title: "Khôi phục tài khoản Facebook",
    icon: "Facebook",
    short:
      "Hỗ trợ tài khoản bị khóa/vô hiệu hóa, hướng dẫn kháng nghị theo quy trình chính thức của nền tảng.",
    items: [
      "Hỗ trợ tài khoản bị khóa hoặc vô hiệu hóa",
      "Hướng dẫn kháng nghị và khôi phục theo quy trình chính thức",
      "Hỗ trợ vấn đề đăng nhập, bảo mật, xác minh danh tính",
      "Xử lý sự cố Fanpage và quyền quản trị",
      "Tư vấn bảo mật và hạn chế nguy cơ bị chiếm quyền",
    ],
  },
  {
    id: "tiktok-support",
    group: "TIKTOK SOLUTIONS",
    title: "Hỗ trợ tài khoản TikTok",
    icon: "Music2",
    short:
      "Đồng hành khi tài khoản gặp sự cố, hướng dẫn khiếu nại và tối ưu hồ sơ phát triển kênh.",
    items: [
      "Hỗ trợ tài khoản TikTok gặp sự cố",
      "Hướng dẫn gửi khiếu nại khi bị đình chỉ",
      "Hỗ trợ vấn đề đăng nhập và xác minh",
      "Tư vấn tối ưu hồ sơ TikTok",
      "Tư vấn chiến lược nội dung và phát triển kênh",
    ],
  },
  {
    id: "growth",
    group: "SOCIAL MEDIA GROWTH",
    title: "Phát triển mạng xã hội",
    icon: "TrendingUp",
    short:
      "Tư vấn tăng trưởng, quản lý hiện diện số và thiết kế nội dung truyền thông đa nền tảng.",
    items: [
      "Tư vấn phát triển Facebook Page",
      "Tư vấn tăng trưởng TikTok và xây dựng nội dung",
      "Quản lý, tối ưu hiện diện trên mạng xã hội",
      "Thiết kế nội dung và hình ảnh truyền thông",
      "Tư vấn quảng cáo và chiến lược marketing số",
    ],
  },
  {
    id: "digital",
    group: "DIGITAL SERVICES",
    title: "Giải pháp số tùy chỉnh",
    icon: "Layers",
    short:
      "Các giải pháp số linh hoạt cho nhà sáng tạo nội dung và doanh nghiệp, tư vấn theo yêu cầu.",
    items: [
      "Hỗ trợ nền tảng mạng xã hội khác",
      "Tư vấn giải pháp cho nhà sáng tạo nội dung",
      "Tư vấn hệ thống marketing và vận hành kênh",
      "Các giải pháp số tùy chỉnh theo yêu cầu",
    ],
  },
];