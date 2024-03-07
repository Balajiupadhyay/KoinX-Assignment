import Member1 from '../../assets/member1.png'
import Member2 from '../../assets/member2.png'
import Member3 from '../../assets/member3.png'


function Team() {
  return (
    <div className=" flex flex-col  w-[100%] md:w-[70%] bg-white rounded-lg p-6 mb-5">
        <h1 className="text-2xl font-semibold pb-4">Team</h1>
        <p className='pb-4 font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, quisquam rem similique dolore aliquam 
            itaque tenetur consectetur adipisicing elit. Autem, quisquam rem deserunt! Enim, quo mollitia consectetur adipisicing elit. Autem, quisquam rem.
        </p>
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col sm:flex-row sm:pb-4 bg-blue-300/40 p-4 rounded-xl'>
                <div className='flex flex-col justify-center items-center min-w-[180px]'>
                    <img src={Member1} alt="Team Member" className='rounded-2xl h-[165px] w-[150px] pb-2'/>
                    <span className=' font-medium'>John Smith</span>
                    <span>Designation Here</span>
                </div>
                <div className='flex justify-center items-center'>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit pariatur laborum sint eos 
                        beatae repellendus fuga illo quasi debitis perspiciatis quas ad vero eligendi cumque laboriosam 
                        aperiam odit doloremque, saepe similique. Expedita quod quisquam earum voluptatibus doloremque, 
                        cumque culpa molestiae esse fugit quae tenetur! Quis repellat dolores dolore necessitatibus enim.
                    </p>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row sm:pb-4 bg-blue-300/40 p-4 rounded-xl'>
                <div className='flex flex-col  justify-center items-center min-w-[180px]'>
                    <img src={Member2} alt="Team Member" className='rounded-2xl h-[165px] w-[150px] pb-2'/>
                    <span className=' font-medium'>Elina Williams</span>
                    <span>Designation Here</span>
                </div>
                <div className='flex justify-center items-center '>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit pariatur laborum sint eos 
                        beatae repellendus fuga illo quasi debitis perspiciatis quas ad vero eligendi cumque laboriosam 
                        aperiam odit doloremque, saepe similique. Expedita quod quisquam earum voluptatibus doloremque, 
                        cumque culpa molestiae esse fugit quae tenetur! Quis repellat dolores dolore necessitatibus enim.
                    </p>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row sm:pb-4 bg-blue-300/40 p-4 rounded-xl'>
                <div className='flex flex-col justify-center items-center min-w-[180px]'>
                    <img src={Member3} alt="Team Member" className='rounded-2xl h-[165px] w-[150px] pb-2'/>
                    <span className=' font-medium'>John Smith</span>
                    <span>Designation Here</span>
                </div>
                <div className='flex justify-center items-center'>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit pariatur laborum sint eos 
                        beatae repellendus fuga illo quasi debitis perspiciatis quas ad vero eligendi cumque laboriosam 
                        aperiam odit doloremque, saepe similique. Expedita quod quisquam earum voluptatibus doloremque, 
                        cumque culpa molestiae esse fugit quae tenetur! Quis repellat dolores dolore necessitatibus enim.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team