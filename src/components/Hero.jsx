export default function Hero() {
  return (
    <div className="flex flex-col gap-10 bg-amber-700 h-[55vh] justify-center items-center bg-[url('https://www.housedigest.com/img/gallery/5-tips-for-choosing-the-right-style-kitchen-to-match-your-homes-aesthetic/intro-1664458356.jpg')] bg-cover">
      <div className="flex border-b-2 justify-evenly w-2/6 mx-auto text-white text-sm font-bold py-1 ">
        <button className="w-10 text-center hover:text-neutral-200 transition-all">Best Match</button>
        <button className="w-20 text-center hover:text-neutral-200 transition-all">Highest Rated</button>
        <button className="w-20 text-center hover:text-neutral-200 transition-all">Most Reviewed</button>
      </div>
      <div className="flex gap-6">
        <form action="" className="">
          <input type="text" className="w-[20rem] p-2 px-4 rounded text-sm font-semibold" placeholder="Search Business" />
        </form>
        <form action="">
          <input type="text" className="w-[20rem] p-2 px-4 rounded text-sm font-semibold" placeholder="Where?" />
        </form>
      </div>
      <div>
        <button className="bg-yellow-500 hover:bg-yellow-600 p-2 px-4 rounded text-sm font-bold text-white transition-all">Let's Go</button>
      </div>
    </div>
  );
}
