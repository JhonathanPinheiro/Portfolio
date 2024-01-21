import Image from "next/image"

export default function HeroSection () {
    return (
        <section className="w-full h-[735px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div>
                    <p>Olá, meu nome é</p>
                    <h2>Jhonathan Pinheiro</h2>
                    <div>
                       <p>Olá, meu nome é Jhonathan e sou um desenvolvedor front-end</p> 
                    </div>

                    <div>
                        techs
                    </div>

                    <div>
                        contato
                    </div>
                </div>
                <Image width={420} height={404} src='/images/profile-pic.png' alt="Foto de perfil" />
            </div>
        </section>
    )
}