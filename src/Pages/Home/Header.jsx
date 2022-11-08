export const Header = () => {
    return (
      <div className="relative h-[80vh]">
        <img
          src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75 h-[80vh]">
          <div className="px-4 py-16 mx-auto w-full md:max-w-2xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-5xl mb-4 font-bold text-white">Certify your English proficiency today!</h1>
              <p>The only potential limitation to your IELTS result is your preparation. If you want to get your best score possible on this difficult exam, it’s important to take the time beforehand and fully prepare yourself.</p>
              <button className="btn btn-primary btn-sm normal-case mt-5">Details</button>
            </div>
          </div>
        </div>
      </div>
    );
  };