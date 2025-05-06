import { RichText } from "apps/admin/widgets.ts";

interface ItemsText {
    title?: string;
    context?: RichText;
}

interface Props {
    title?: RichText;
    subTitle?: RichText;
    textItems?: ItemsText[]
}

function OurServices({ title, subTitle, textItems }: Props) {
    return (
        <div id="services">
            <div class="container md:max-w-6xl flex flex-col gap-6">
                <h1 class="px-3 md:px-0" dangerouslySetInnerHTML={{ __html: title ?? '' }} />
                <span class="px-3 md:px-0" dangerouslySetInnerHTML={{ __html: subTitle ?? '' }} />

                {textItems?.map((text, index) => (
                    <><div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" defaultChecked={index === 0 ? true : false} />
                        <div className="collapse-title font-semibold lg:text-5xl">{text.title}</div>
                        <div className="collapse-content text-xl" dangerouslySetInnerHTML={{ __html: text.context ?? '' }} />
                    </div></>
                ))}
            </div>
        </div>
    )
}

export default OurServices

