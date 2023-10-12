export default function attackInfo({ special }) {
  const result = [];
  special.forEach(({
    id,
    name,
    icon,
    description = 'Описание недоступно',
  }) => {
    result.push({
      id,
      name,
      description,
      icon,
    });
  });
  return result;
}
