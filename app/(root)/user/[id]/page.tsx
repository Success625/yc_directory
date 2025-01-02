import { auth } from "@/auth";
import { client } from "@/sanity/lib/client";import { AUTHOR_BY_GITHUB_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const session = await auth();

  const user = await client.fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id });
  if (!user) return notFound();

  return (
    <>
      <section className="profile_container">
        <div className="profile_card">
          <div className="profile_title">
            <h3 className="text-24-black uppercase line-clamp-1 text-center">{ user.name }</h3>
          </div>

          <Image />
        </div>
      </section>
    </>
  )
}

export default page
