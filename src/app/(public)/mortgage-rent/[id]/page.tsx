import MortgageRentDetailSection from '@/components/MortgageRent/MortgageRentDetailSection/MortgageRentDetailSection';
import { SendCommentFetch } from '@/core/api/MortgageRent/MortgageRentDetail/SendComments';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "رهن و اجاره",
};

export interface ISendCommentsResponse {
  error?: string;
  success?: boolean
}
export default async function page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return (
    <>
      <MortgageRentDetailSection houseId={id} action={SendCommentFetch} />
    </>
  )
}