export default function Clients() {
  const imageUrls = [...Array(13).keys()].map(
    (index) => `img/partners/logos-${index + 1}.png`
  );
  return (
    <div className="mil-soft-bg">
      <div className="container mil-p-0-120">
        <div className="swiper-container mil-infinite-show mil-up">
          <div className="swiper-wrapper">
            {imageUrls.map((imageUrl, index) => (
              <div className="swiper-slide" key={index}>
                <div className="mil-partner-frame">
                  <img
                    src={imageUrl}
                    alt={`logo-${index}`}
                    className="mil-partner-img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
