import { IHouses } from "@/core/types/MortgageRent/IHouses";

interface GetMortgageRentHousesParams {
  transactionType?: string;
  search?: string;
  sort?: string;
  propertyType?: string;
  location?: string;
  minMortgage?: string;
  maxMortgage?: string;
  minRent?: string;
  maxRent?: string;
  minArea?: string;
  maxArea?: string;
  page?: string;
}

export const getMortgageRentHouses = async (params: GetMortgageRentHousesParams = {}): Promise<IHouses> => {
  try {
    const {
      transactionType = "",
      search = "",
      sort = "last_updated",
      propertyType = "",
      location = "",
      minMortgage = "",
      maxMortgage = "",
      minRent = "",
      maxRent = "",
      minArea = "",
      maxArea = "",
      page = "1",
    } = params;

    const queryParams = new URLSearchParams({
      page,
      limit: "6",
      location,
      transactionType,
      search,
      order: "DESC",
      sort,
      propertyType,
      minRent,
      maxRent,
      minMortgage,
      maxMortgage,
      minArea,
      maxArea,
    });

    const baseURL = process.env.API_BASE_URL || "";
    const response = await fetch(`${baseURL}/api/houses?${queryParams}`);
    console.log(queryParams)
    if (!response.ok) {
      throw new Error("Failed to fetch houses");
    }

    return await response.json();
  } catch (error) {
    throw new Error("Failed to fetch houses");
  }
};
