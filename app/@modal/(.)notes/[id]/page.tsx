import NotePreview from '@/components/NotePreview/NotePreview';

type Props = { params: Promise<{ id: string }> };

export default async function NotePreviewModal({ params }: Props) {
  const { id } = await params;
  return <NotePreview noteId={id} />;
}
