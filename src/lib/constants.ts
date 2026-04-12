export const RESTAURANT = {
  name: "Cơm Nhà Gia Thành",
  shortName: "Gia Thành",
  tagline: "Cơm Nhà — Vị Quê",
  phone: "0355280935",
  phone2: "0988896047",
  zaloLink: "https://zalo.me/0355280935",
  address: "272 Trần Hưng Đạo, Phường Quảng Trị (Đối diện UBND Thị Xã)",
  googleMapsLink: "https://maps.app.goo.gl/ZpFnNpamRw6LKGEt9",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d107.1839703!3d16.7533189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3140e5263d561e6f%3A0x2b2fbeb0a146de8e!2zQ8ahbSBOaMOgIEdpYSBUaMOgbmg!5e0!3m2!1svi!2svn!4v1712900000000",
  hours: "10h – 14h hàng ngày",
  deliveryNote: "Giao hàng miễn phí trong bán kính 2km",
  services: [
    "Nhận đặt bàn",
    "Phục vụ khách đoàn",
    "Xuất hoá đơn",
    "Giao cơm văn phòng, cơ quan, tại nhà",
  ],
} as const;

export const NAV_LINKS = [
  { label: "Giới thiệu", href: "#gioi-thieu" },
  { label: "Thực đơn", href: "#thuc-don" },
  { label: "Hình ảnh", href: "#hinh-anh" },
  { label: "Đánh giá", href: "#danh-gia" },
  { label: "Liên hệ", href: "#lien-he" },
] as const;

export const MENU_ITEMS = [
  {
    name: "Cơm phần 2 người",
    price: "79.000đ",
    description:
      "Mâm cơm đầy đặn cho 2 người với các món đổi theo ngày: cá kho, thịt kho, canh, rau xào, trứng chiên, và cơm niêu nóng hổi.",
    image: "/images/menu/com-2-nguoi.jpg",
    highlight: true,
  },
  {
    name: "Cơm phần 1 người",
    price: "39.000đ",
    description:
      "Phần cơm vừa đủ cho 1 người với cơm niêu nóng, 2-3 món mặn, canh và rau.",
    image: "/images/menu/com-1-nguoi.jpg",
    highlight: false,
  },
] as const;

export type MenuCategory = {
  name: string;
  items: { name: string; price: number; hot?: boolean }[];
};

export const FULL_MENU: MenuCategory[] = [
  {
    name: "Món Lạt",
    items: [
      { name: "Trứng chiên", price: 35 },
      { name: "Trứng chiên thịt bằm", price: 45 },
      { name: "Dưa cà chấm ruốc", price: 30 },
      { name: "Khổ qua xào trứng", price: 45 },
      { name: "Rau xào tỏi", price: 35 },
      { name: "Cải luộc chấm trứng", price: 40 },
    ],
  },
  {
    name: "Món Mặn",
    items: [
      { name: "Đậu sốt cà chua", price: 35 },
      { name: "Thịt luộc tôm chua", price: 75 },
      { name: "Thịt kho tàu", price: 75, hot: true },
      { name: "Ba chỉ xào cải", price: 70, hot: true },
      { name: "Bò xào cải chua", price: 70 },
      { name: "Bò xào hành", price: 70 },
      { name: "Bò xào măng", price: 80 },
      { name: "Bò xào mướp", price: 70 },
      { name: "Gà bóp rau răm", price: 75 },
      { name: "Vịt kho sả", price: 75 },
      { name: "Vịt kho gừng", price: 75 },
      { name: "Sườn rim", price: 75, hot: true },
      { name: "Tim cật xào cần", price: 60 },
      { name: "Sườn xào chua ngọt", price: 75, hot: true },
      { name: "Sườn om củ quả", price: 75 },
      { name: "Mực xào thơm cà", price: 80, hot: true },
      { name: "Tôm rim", price: 75 },
      { name: "Lòng mề xào giá", price: 40 },
      { name: "Lòng mề xào mướp", price: 40 },
      { name: "Cá dĩa hấp mùng tơi", price: 75, hot: true },
      { name: "Cá trắm kho tộ", price: 75, hot: true },
    ],
  },
  {
    name: "Món Kho",
    items: [
      { name: "Gà kho nếm", price: 75, hot: true },
      { name: "Gà kho sả", price: 75 },
      { name: "Tôm thịt kho", price: 75, hot: true },
      { name: "Cá lóc kho tiêu", price: 65 },
      { name: "Cá bống kho tộ", price: 75, hot: true },
      { name: "Cá dĩa kho tiêu", price: 65, hot: true },
      { name: "Cá diêu hồng kho", price: 65 },
      { name: "Cá ngừ kho ớt hiểm", price: 70 },
      { name: "Cá nục kho thơm", price: 65 },
    ],
  },
  {
    name: "Món Canh",
    items: [
      { name: "Canh riêu cua mồng tơi", price: 60, hot: true },
      { name: "Canh khổ qua bò bằm", price: 45 },
      { name: "Canh chua bò bằm", price: 45 },
      { name: "Canh chua cá trắm", price: 55, hot: true },
      { name: "Canh mít nấu tôm", price: 45 },
      { name: "Canh bí đao nấm tôm", price: 45 },
      { name: "Canh rau trứng bách thảo", price: 55, hot: true },
    ],
  },
  {
    name: "Nước",
    items: [
      { name: "Nước suối", price: 7 },
      { name: "Pepsi", price: 12 },
      { name: "Mirinda/7Up", price: 12 },
      { name: "Sting", price: 12 },
      { name: "Bò húc", price: 15 },
    ],
  },
  {
    name: "Món Gọi Thêm",
    items: [
      { name: "Cơm thêm", price: 7 },
      { name: "Cà pháo thêm", price: 7, hot: true },
      { name: "Canh thêm", price: 10 },
      { name: "Mắm tôm chua thêm", price: 5 },
    ],
  },
];

export const REVIEW_IMAGES = [
  { src: "/images/reviews/review-1.png", alt: "Đánh giá từ khách hàng trên Google Maps" },
  { src: "/images/reviews/review-2.png", alt: "Đánh giá 5 sao từ Định Nguyễn Công" },
  { src: "/images/reviews/review-3.png", alt: "Đánh giá từ khách hàng" },
  { src: "/images/reviews/review-4.png", alt: "Đánh giá từ Trang Thục" },
] as const;

export const GALLERY_IMAGES = [
  { src: "/images/gallery/01.jpg", alt: "Cơm phần với canh, cá kho và rau" },
  { src: "/images/gallery/02.jpg", alt: "Cơm phần với canh bí, trứng chiên" },
  { src: "/images/gallery/03.jpg", alt: "Cơm phần với rau xào và cơm niêu" },
  { src: "/images/gallery/04.jpg", alt: "Bàn cơm cho nhóm khách" },
  { src: "/images/gallery/05.jpg", alt: "Mặt tiền quán Cơm Nhà Gia Thành" },
  { src: "/images/gallery/06.jpg", alt: "Cơm phần giao hàng" },
  { src: "/images/gallery/07.jpg", alt: "Phần cơm delivery đóng hộp" },
  { src: "/images/gallery/08.jpg", alt: "Quán nhìn từ ngoài đường" },
] as const;

export const ABOUT_TEXT = {
  title: "Câu chuyện Cơm Nhà",
  paragraphs: [
    "Cơm Nhà Gia Thành ra đời từ tình yêu với những bữa cơm gia đình — nơi mỗi món ăn được nấu bằng cả tấm lòng, như mẹ nấu cho con.",
    "Tọa lạc tại 272 Trần Hưng Đạo, đối diện UBND Thị Xã Quảng Trị, quán mang phong cách bếp xưa với nét trang trí Pháp cổ, tạo nên không gian ấm cúng và hoài niệm. Mỗi bữa trưa tại đây là một hành trình trở về với hương vị quê nhà.",
    "Chúng tôi phục vụ cơm phần cho gia đình, nhóm bạn, du khách, và cả khối văn phòng, cơ quan — với cam kết giao hàng miễn phí trong bán kính 2km.",
  ],
} as const;
