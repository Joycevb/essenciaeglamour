import Image from "next/image";
import styles from "../page.module.css";
import Logo from "../../../public/logo.png"

export default function FundoBacground() {
    return (
        <div>
            <Image src={Logo} alt="Logo Essência e Glamour" />
        </div>  
    );
}