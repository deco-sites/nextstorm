import type { VideoWidget } from "apps/admin/widgets.ts";


interface Props {
    video?: VideoWidget;
}

function budgetShow({ video }: Props) {
    return (
        <div id="orcamento" class="bg-black pt-[100px]">
            <div class="max-w-[1024px] mx-auto relative">
                <h2 class="text-white text-center mb-5 text-3xl lg:text-5xl">Solicite seu<br /> <strong class="text-[#93C50C]">orçamento</strong></h2>
                <video
                    loading="eager"
                    autoPlay
                    muted
                    loop
                    id="heroVideo"
                    className={`w-full object-cover h-[450px] `}
                >
                    <source
                        src={video}
                        media="(min-width: 1024px)"
                    />
                    <source
                        src={video}
                        media="(max-width: 1023px)"
                    />
                </video>

            </div>
        </div>
    )
}

export default budgetShow