type Props = {
  params: Promise<{
    username: string;
    id: string;
  }>;
  searchParams: Promise<Record<string, string>>;
};

export default async function PostPage({ params }: Props) {
  const resolvedParams = await params;
  const { username, id } = resolvedParams;

  return (
    <div>
      <h1>게시글 페이지</h1>
      <p>사용자: {username}</p>
      <p>게시글 ID: {id}</p>
    </div>
  );
}
