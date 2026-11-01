export type Plan = {
  name: string;
  tag: string;
  desc: string;
  features: string[];
  highlighted?: boolean;
};

export const plans: Plan[] = [
  {
    name: "BASIC",
    tag: "Hỗ trợ cơ bản",
    desc: "Phù hợp nhu cầu tư vấn nhanh và xử lý tình huống đơn giản.",
    features: [
      "Tư vấn 1:1 qua Zalo/Telegram",
      "Đánh giá tình trạng tài khoản",
      "Hướng dẫn kháng nghị theo quy trình",
      "Theo dõi tiến độ trong 3 ngày",
    ],
  },
  {
    name: "ADVANCED",
    tag: "Hỗ trợ chuyên sâu",
    desc: "Đồng hành xuyên suốt cho tình huống phức tạp và cần theo dõi dài.",
    features: [
      "Tất cả quyền lợi gói BASIC",
      "Phân tích chi tiết nguyên nhân",
      "Soạn thảo nội dung kháng nghị",
      "Theo dõi tiến độ đến 14 ngày",
      "Hỗ trợ đa nền tảng (FB, TikTok)",
    ],
    highlighted: true,
  },
  {
    name: "CUSTOM",
    tag: "Giải pháp theo yêu cầu",
    desc: "Thiết kế riêng cho doanh nghiệp và nhà sáng tạo nội dung.",
    features: [
      "Khảo sát và tư vấn chiến lược",
      "Phạm vi dịch vụ theo thỏa thuận",
      "Quản lý nhiều kênh song song",
      "Báo giá riêng theo dự án",
    ],
  },
];