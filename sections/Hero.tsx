import type { ImageWidget, VideoWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

interface Card {
  /**
 * @format color
 * @default #C0C0C0
 */
  backgroundColor?: string;
  backgroundImage?: ImageWidget;
  text?: string;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
   */
  description?: string;
  image?: ImageWidget;
  video?: VideoWidget;
  placement?: "left" | "right";
  cta?: CTA[];
  cards?: Card[]
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

export default function HeroFlats({
  title = "Click here to tweak this text however you want.",
  description,
  image,
  video,
  placement = "left",
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", outline: false },
    { id: "change-me-2", href: "/", text: "Change me", outline: true },
  ],
  cards,
}: Props) {
  return (
    <nav class="relative">
      {video && <video
        loading="eager"
        autoPlay
        muted
        loop
        id="heroVideo"
        className={`w-full absolute top-0 right-0 object-cover h-full `}
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
      }
      <div class="lg:container lg:mx-auto mx-4 flex flex-col items-center gap-8">
        <div
          class={`flex w-full xl:container xl:mx-auto py-24 mx-5 md:mx-10 z-10 ${image
            ? PLACEMENT[placement]
            : "flex-col items-center justify-center text-center"
            } lg:py-36 gap-12 md:gap-20 items-center`}
        >
          {image && (
            <Image
              width={640}
              class="w-full lg:w-1/2 object-fit"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={image}
              alt={image}
              decoding="async"
              loading="lazy"
            />
          )}
          <div
            class={`mx-6 lg:mx-auto lg:w-full space-y-4 gap-4 ${image
              ? "lg:w-1/2 lg:max-w-xl"
              : "flex flex-col items-center justify-center lg:max-w-3xl"
              }`}
          >
            <div
              class="inline-block lg:text-[80px] leading-[30px] text-4xl font-medium"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            >
            </div>
            <p class="text-lg md:text-md leading-[150%]">
              {description && description}
            </p>
            {cta &&
              <div class="flex items-center gap-3">
                {cta?.map((item) => (
                  <a
                    key={item?.id}
                    id={item?.id}
                    href={item?.href}
                    target={item?.href.includes("http") ? "_blank" : "_self"}
                    class={`font-normal btn btn-primary ${item.outline && "btn-outline"
                      } border-[1px] border-solid border-green-600 rounded-xl`}
                  >
                    <span>{item?.text}</span>
                    <Icon id="ChevronRight" size={24} strokeWidth={1} />
                  </a>

                ))}
              </div>
            }
            <div>
              <ul class="flex justify-center flex-wrap gap-6">
                {cards?.map((card) => (
                  <li style={{ background: `${card.backgroundColor}` }} class="bg-green-600 relative p-3 h-[280px] w-[200px] flex items-center justify-center">
                    {image && (
                      <Image
                        width={200}
                        height={280}
                        class="w-full h-full absolute top-0 z-10"
                        src={card.backgroundImage ?? ''}
                        alt={"card background-image"}
                        decoding="async"
                        loading="lazy"
                      />
                    )}
                    <span class="text-black text-center text-base lg:text-xl relative z-50">{card.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
