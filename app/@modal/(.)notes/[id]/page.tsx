import NotePreview from '@/app/@modal/(.)notes/[id]/NotePreview.client';

type Props = { params: Promise<{ id: string }> };

export default async function NotePreviewModal({ params }: Props) {
  const { id } = await params;
  return <NotePreview noteId={id} />;
}
