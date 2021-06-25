import { SectionMember } from '@components/RenderSectionts'
import SimpleBlockContent from '@components/SimpleBlockContent'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import client from 'client'
import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'
import { FC } from 'react'

function Avatar({ node }: { node: SanityImageSource & { alt?: string } }) {
  const imageProps = useNextSanityImage(client, node)

  return (
    <Image
      src={imageProps.src}
      loader={imageProps.loader}
      blurDataURL={imageProps.blurDataURL}
      layout="fixed"
      objectFit="contain"
      className="rounded-full"
      width={200}
      height={200}
      alt={node.alt}
      placeholder="blur"
    />
  )
}

const MembersSection: FC<SectionMember> = ({
  members,
  heading,
  description,
}) => {
  return (
    <section className="bg-pink">
      <div className="container mx-auto flex flex-col items-center ">
        <h2>{heading}</h2>

        <SimpleBlockContent
          blocks={description}
          className="mt-12 w-full md:px-0 md:w-8/12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-9 gap-y-16">
          {members.map((user, index) => {
            return (
              <div
                className="flex flex-col items-center relative"
                key={`USER_${index}`}
              >
                <div className="flex-1 relative">
                  <Avatar node={user.image} />
                </div>
                <h3 className="mt-8 mb-2 uppercase">{user.name}</h3>
                <p>{user.role}</p>
                <p>{user.phone}</p>
                <p>{user.email}</p>
                {!!user.description && (
                  <button className="mt-6">READ MORE</button>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default MembersSection
