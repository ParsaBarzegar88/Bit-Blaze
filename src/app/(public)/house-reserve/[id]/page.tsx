import HouseReserveDetail from '@/components/HouseReserve/Detail/Detail';
import { SendCommentFetch } from '@/core/api/HouseReserve/Detail/SendComments';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "رزرو خانه",
};
export interface ISendCommentsResponse {
  error?: string;
  success?: boolean
}
export default async function HouseReserveDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <div>
       <HouseReserveDetail DetailId={id} action={SendCommentFetch} />
    </div>
  )
}