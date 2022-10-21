import '../index.css'
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineBell } from 'react-icons/ai'

export default function Underbar() {
    return (
        <div className=' bg-white h-[72px] flex justify-between items-center h-12 px-4  '>
            <ul className='flex flex-between '>
                <li className="pl-40"> Yazilim Geliştirme</li>
                <li className=''> İşletme</li>
                <li className=' '> Finans ve Muhasebe</li>
                <li className=''> Bt ve Yazılım</li>
                <li className=''> Ofiste Verimlilik</li>
                <li className=' '> Kisisel Gelişim</li>
                <li className=''> Tasarım</li>
                <li className=''> Pazarlama</li>
                <li className=''> Sağlik ve Fitness</li>
                <li className='pr-20'> Müzik</li>
            </ul>
        </div>
    )
}