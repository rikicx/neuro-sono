import { redirect } from "next/navigation";

export default async function QuestionnaireShortLink({ params }) {
  const { token } = await params;
  redirect(`/questionario/?convite=${encodeURIComponent(token)}`);
}
