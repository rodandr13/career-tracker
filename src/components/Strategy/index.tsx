import CustomH2 from 'components/CustomH2';
import CustomButton from 'components/CustomButton';
import BaseTable from 'components/BaseTable';

function Strategy() {
  return (
    <>
      <CustomH2>Моя стратегия</CustomH2>
      <BaseTable />
      <CustomButton variant="outline">Изменить стратегию развития</CustomButton>
      <CustomH2>Мои навыки</CustomH2>
      <BaseTable />
      <CustomButton variant="outline">Скорректировать свои навыки</CustomButton>
    </>
  );
}

export default Strategy;
