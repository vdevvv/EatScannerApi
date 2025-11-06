export const extractOrderBy = <T extends object>(
  orderBy: string,
  order: string,
  model: T,
) => {
  const fields = Object.keys(model);
  const field = fields.includes(orderBy ?? '') ? orderBy : 'createdAt';

  return {[field]: order};
}
