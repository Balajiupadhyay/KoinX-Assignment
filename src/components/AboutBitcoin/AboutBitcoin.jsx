import { GrLinkNext } from "react-icons/gr";
import Img1 from "../../assets/image1.png"
import Img2 from "../../assets/image2.png"

function AboutBitcoin() {
  return (
    <div className=" flex flex-col  w-[100%] md:w-[70%] bg-white rounded-lg p-6 mb-5">
        <h1 className="text-2xl font-semibold pb-2">About Bitcoin</h1>
        <div className="flex flex-col gap-4">
            <h2 className="text-lg font-medium">What is Bitcoin?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nobis facere, esse beatae eaque 
                aliquid aliquam hic eum veritatis tempora est consequuntur! Necessitatibus quisquam sapiente molestiae 
                fugit? Dolorum, culpa quia. Illum delectus repudiandae, earum autem veniam iusto aut necessitatibus 
                aperiam cumque, corrupti optio maiores voluptates rerum.</p>
            <hr />
            <h2 className="text-lg font-medium">Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium, quod unde aperiam ipsam 
                optio suscipit perferendis ipsum incidunt exercitationem? Provident ex hic odio atque distinctio 
                deleniti, et corrupti sit officia impedit ipsum deserunt tempore adipisci inventore? Quasi adipisci 
                quod iure eveniet cumque accusamus temporibus dicta itaque dolorem deleniti ex labore necessitatibus 
                quam, suscipit hic excepturi quo blanditiis? Eaque ipsa earum quaerat, neque nihil debitis amet maiores? 
                Ducimus est nihil quo! Consectetur vel quos non. Libero aut ipsum fugiat impedit?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eius similique qui impedit vero magni dolorum, perferendis expedita voluptatem delectus adipisci recusandae ipsam soluta quam sapiente obcaecati quos numquam omnis iure nisi earum est. Ex alias impedit perspiciatis non possimus ratione cum deleniti natus in magni repellendus ipsum corporis laborum id delectus, accusantium explicabo! Nulla quibusdam ex animi quae delectus.
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet corporis cumque. Accusamus ut ex iste ab eaque nesciunt illum quis animi, soluta maxime numquam natus, aliquam corporis, saepe voluptatibus?
            </p>
            <hr />
            <div>
                <h2 className="text-2xl font-semibold pb-2">Already Holding Bitcoin?</h2>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="p-2 flex  gap-4 gradient1 min-w-[48%] rounded-xl">
                        <div>
                            <img className="rounded-lg" src={Img1} alt="" />
                        </div>
                        <div className="flex flex-col justify-around">
                            <h1 className="text-2xl text-white font-medium">Calculate your <br /> profits</h1>
                            <button className="flex justify-center bg-slate-50 rounded-lg p-2">
                                <span>Check Now</span> 
                                <span className="p-1"><GrLinkNext /></span>
                            </button>
                        </div>
                    </div>
                    <div className="p-2 flex  gap-4 gradient2 min-w-[48%] rounded-xl">
                        <div>
                            <img className="rounded-lg" src={Img2} alt="" />
                        </div>
                        <div className="flex flex-col justify-around">
                            <h1 className="text-2xl text-white font-medium">Calculate your tax <br /> liability</h1>
                            <button className="flex justify-center bg-slate-50 rounded-lg p-2">
                                <span>Check Now</span> 
                                <span className="p-1"><GrLinkNext /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad praesentium perspiciatis quae quos. Nisi sapiente sint, at esse reiciendis modi nulla animi veritatis. Dignissimos, placeat nobis fugiat dolores amet porro iusto aliquam libero alias commodi consequatur quasi. Quos distinctio optio doloremque libero, velit necessitatibus minus voluptatum labore, eveniet vero tempore!
                </p>
        </div>

    </div>
  )
}

export default AboutBitcoin