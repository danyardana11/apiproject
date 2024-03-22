export default function Service() {
    return(
        <div className="w-full h-auto mt-20">
          <p className="w-full text-center text-4xl font-bold font-serif">Our Services</p>
          <div className="h-64 grid grid-cols-4 gap-6 mt-14">
            <div className="w-full h-full full-shadow rounded-xl flex flex-col items-center">
              <div className="w-16 h-16 bg-[#088016] flex items-center rounded-full mt-6">
                <img
                  src="Home-Images/Service/Quick-Order.png"
                  className="h-12 w-12 mx-auto rounded-full"
                  alt=""
                />
              </div>
              <p className="text-lg font-semibold mt-2">Quick Order</p>
              <p className="w-5/6 mt-4 text-center text-sm font-medium">
                Optimize your online shopping with us, providing a rapid and
                user-friendly way to place orders effortlessly
              </p>
            </div>
            <div className="w-full h-full full-shadow rounded-xl flex flex-col items-center">
              <div className="w-16 h-16 bg-[#088016] flex items-center rounded-full mt-6">
                <img
                  src="Home-Images/Service/Home-Delivery.png"
                  className="h-10 w-10 mx-auto"
                  alt=""
                />
              </div>
              <p className="text-lg font-semibold mt-2">Home-Delivery</p>
              <p className="w-5/6 mt-4 text-center text-sm font-medium">
                From cart to your door, experience seamless home delivery at
                your fingertips
              </p>
            </div>
            <div className="w-full h-full full-shadow rounded-xl flex flex-col items-center">
              <div className="w-16 h-16 bg-[#088016] flex items-center rounded-full mt-6">
                <img
                  src="Home-Images/Service/Price.png"
                  className="h-12 w-12 mx-auto rounded-full"
                  alt=""
                />
              </div>
              <p className="text-lg font-semibold mt-2">Best Price</p>
              <p className="w-5/6 mt-4 text-center text-sm font-medium">
                We take pride in offering the least prices, always undercutting
                the market for your benefit
              </p>
            </div>
            <div className="w-full h-full full-shadow rounded-xl flex flex-col items-center">
              <div className="w-16 h-16 bg-[#088016] flex items-center rounded-full mt-6">
                <img
                  src="Home-Images/Service/Heart.png"
                  className="h-9 w-9 mx-auto rounded-full"
                  alt=""
                />
              </div>
              <p className="text-lg font-semibold mt-2">Suitable For All</p>
              <p className="w-5/6 mt-4 text-center text-sm font-medium">
                Navigate effortlessly through our platform, crafted for
                stress-free shopping and inclusive accessibility
              </p>
            </div>
          </div>
        </div>
    )
}