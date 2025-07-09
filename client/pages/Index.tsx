import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CandleCollectionSection from "@/components/CandleCollectionSection";
import Footer from "@/components/Footer";
import {
  MessageCircle,
  Shield,
  Truck,
  Award,
  Sparkles,
  Heart,
} from "lucide-react";
import React from "react";
import ChatBotPopup from "@/components/ChatBotPopup";

function ContactSection() {
  return (
    <section id="lien-he" className="bg-background py-20 px-4 border-t border-border">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Liên Hệ</h2>
        <p className="text-muted-foreground mb-8">Bạn cần tư vấn hoặc có câu hỏi? Hãy gửi thông tin cho chúng tôi!</p>
        <form className="space-y-4">
          <input type="text" placeholder="Họ tên" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
          <textarea placeholder="Nội dung" rows={4} className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
          <button type="submit" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">Gửi liên hệ</button>
        </form>
      </div>
    </section>
  );
}

export default function Index() {
  const [showChat, setShowChat] = React.useState(false);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CandleCollectionSection id="nen-thom" />
      <section id="phu-kien" className="bg-background-secondary py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nến Thơm Cao Cấp 100% Tự Nhiên
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Được làm từ sáp đậu nành tự nhiên và tinh dầu thực vật cao cấp,
                mang đến hương thơm trong lành và an toàn cho sức khỏe.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>100% sáp đậu nành tự nhiên</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Truck className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Miễn phí giao hàng toàn quốc</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Chất lượng được kiểm định</span>
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="w-full h-64 bg-gradient-to-br from-amber-dark to-secondary rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <Shield className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Chất Lượng Premium</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border md:order-1">
              <div className="w-full h-64 bg-gradient-to-br from-primary to-amber-dark rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <Sparkles className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Hương Thơm Độc Đáo</p>
                </div>
              </div>
            </div>
            <div className="md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Hương Thơm Được Pha Chế Riêng
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Đội ngũ chuyên gia hương liệu của chúng tôi tạo ra những mùi
                hương độc đáo, mang đến trải nghiệm thư giãn hoàn hảo cho không
                gian sống.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Công Thức Độc Quyền
                    </h4>
                    <p className="text-muted-foreground">
                      Từng loại nến có công thức riêng được phát triển bởi
                      chuyên gia
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Hương Thơm Lâu Dài
                    </h4>
                    <p className="text-muted-foreground">
                      Hương thơm tỏa ra đều đặn và tồn tại lâu trong không gian
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      An Toàn Sức Khỏe
                    </h4>
                    <p className="text-muted-foreground">
                      Không chứa hóa chất độc hại, an toàn cho trẻ em và thú
                      cưng
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="ve-chung-toi" className="bg-background py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tại Sao Chọn SaaS?
            </h2>
            <p className="text-xl text-muted-foreground">
              Những lý do khiến khách hàng tin tưởng và yêu thích sản phẩm của
              chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Thư Giãn Tâm Hồn
              </h3>
              <p className="text-muted-foreground">
                Hương thơm dịu nhẹ giúp giảm stress và mang đến cảm giác thư
                thái sau những ngày làm việc mệt mỏi.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Trang Trí Không Gian
              </h3>
              <p className="text-muted-foreground">
                Thiết kế tinh tế, sang trọng giúp không gian sống của bạn trở
                nên ấm cúng và đẳng cấp hơn.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Quà Tặng Ý Nghĩa
              </h3>
              <p className="text-muted-foreground">
                Lựa chọn hoàn hảo để tặng người thân yêu trong các dịp đặc biệt,
                thể hiện sự quan tâm chân thành.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="bo-qua-tang" className="bg-background-secondary py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Sẵn Sàng Tạo Không Gian Thơm Mát?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Hãy để SaaS mang đến những giây phút thư giãn tuyệt vời cho bạn
            và gia đình
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all text-lg">
              Mua Ngay
            </button>
            <button className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted transition-all text-lg">
              Xem Catalog
            </button>
          </div>
        </div>
      </section>

      <HowItWorksSection id="huong-dan" />
      <ContactSection />
      <Footer />
      {/* Fixed Chat Button */}
      {showChat && <ChatBotPopup onClose={() => setShowChat(false)} />}
      <button
        className="fixed bottom-6 right-6 bg-primary text-primary-foreground w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
        onClick={() => setShowChat((v) => !v)}
        aria-label="Mở chat bot"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}
