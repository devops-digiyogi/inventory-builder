import IconButton from 'components/IconButton';
import InputWithCheckBox from 'components/InputWithCheckBox';

export const data = [
  {
    name: 'vegetables & fruits',
    cat_id: 'CAT123',
    id: 'CAT123',
    isAvailable: true,
    isOpen: true,
    subcategories: [
      {
        name: 'Vegetables',
        isAvailable: true,
        sub_cat_id: 'sub123',
        id: 'sub123',
        isOpen: true,
        items: [
          {
            name: 'Cucumber',
            color: '#00B121',
            option: 'Large',
            sku_id: 'SKU02596052',
            stocks: '',
          },
          {
            name: 'Green Chilli',
            color: '#00B121',
            option: 'Small',
            sku_id: 'SKU02596053',
            stocks: '',
          },
          {
            name: 'Carrot',
            color: '#333333',
            option: 'Medium',
            sku_id: 'SKU02596054',
            stocks: '',
          },
        ],
      },
      {
        name: 'Fruits',
        isAvailable: false,
        sub_cat_id: 'sub124',
        id: 'sub124',
        items: [
          {
            name: 'Pineapple',
            color: '#FFDA00',
            option: 'Medium',
            sku_id: 'SKU02596049',
            stocks: 'Unlimited',
          },
          {
            name: 'Banana',
            color: '#FFDA00',
            option: 'Medium',
            sku_id: 'SKU02596049',
            stocks: 'Unlimited',
          },
        ],
      },
    ],
  },
  {
    name: 'BREADS & DIARY',
    cat_id: 'CAT124',
    id: 'CAT124',
    isAvailable: true,
    subcategories: [
      {
        name: 'BREADS',
        isAvailable: false,
        sub_cat_id: 'sub123',
        id: 'sub126',
        items: [
          {
            name: 'veg',
            color: '#898123',
            option: 'Large',
            sku_id: 'SKU123',
            stocks: '24',
          },
        ],
      },
      {
        name: 'Fruits',
        isAvailable: true,
        sub_cat_id: 'sub124',
        id: 'sub127',
        items: [
          {
            name: 'orange',
            color: '#898123',
            option: 'Large',
            sku_id: 'SKU127',
            stocks: '24',
          },
        ],
      },
    ],
  },
  {
    name: 'SNACKS',
    cat_id: 'CAT124',
    id: 'CAT124',
    isAvailable: true,
    subcategories: [
      {
        name: 'BREADS',
        isAvailable: false,
        sub_cat_id: 'sub123',
        id: 'sub126',
        items: [
          {
            name: 'veg',
            color: '#898123',
            option: 'Large',
            sku_id: 'SKU123',
            stocks: '24',
          },
        ],
      },
      {
        name: 'Fruits',
        isAvailable: true,
        sub_cat_id: 'sub124',
        id: 'sub127',
        items: [
          {
            name: 'orange',
            color: '#898123',
            option: 'Large',
            sku_id: 'SKU127',
            stocks: '24',
          },
        ],
      },
    ],
  },
  {
    name: 'Cleaning and Household',
    cat_id: 'CAT124',
    id: 'CAT124',
    isAvailable: true,
    subcategories: [
      {
        name: 'BREADS',
        isAvailable: false,
        sub_cat_id: 'sub123',
        id: 'sub126',
        items: [
          {
            name: 'veg',
            color: '#898123',
            option: 'Large',
            sku_id: 'SKU123',
            stocks: '24',
          },
        ],
      },
      {
        name: 'Fruits',
        isAvailable: true,
        sub_cat_id: 'sub124',
        id: 'sub127',
        items: [
          {
            name: 'orange',
            color: '#898123',
            option: 'Large',
            sku_id: 'SKU127',
            stocks: '24',
          },
        ],
      },
    ],
  },
];

export default function TableData({
  handleSave,
  stockValue,
  setStock,
  isUnlimited,
  setIsUnlimited,
  setEditDetails,
  isValid,
}) {
  const getActions = ({ data, isEdit, catId, subCatId }) => {
    const handleEdit = () => {
      setEditDetails({ editId: data.sku_id, catId, subCatId });
    };

    return isEdit ? (
      <IconButton
        btnLabel='Save'
        iconClass='fa fa-save '
        onButtonClick={handleSave}
      />
    ) : (
      <span
        role='button'
        aria-hidden='true'
        className='fs-20 cursor-pointer '
        onClick={handleEdit}
      >
        &#9998;
      </span>
    );
  };
  const getEdit = (data, column) => {
    return (
      <InputWithCheckBox
        inputPlaceholder={'Enter value'}
        inputValue={stockValue}
        isValid={isValid}
        onInputValueChange={setStock}
        checkBoxLabel='Unlimited'
        isChecked={isUnlimited}
        onCheckBoxToggle={setIsUnlimited}
      />
    );
  };

  const columns = [
    {
      title: 'ITEM NAME',
      dataIndex: 'name',
      key: 'itemName',
    },
    {
      title: 'COLOR',
      dataIndex: 'color',
      key: 'color',
    },

    {
      title: 'OPTIONS',
      dataIndex: 'option',
      key: 'option',
    },
    {
      title: 'SKU ID',
      dataIndex: 'sku_id',
      key: 'sku_id',
    },
    {
      title: 'STOCKS',
      dataIndex: 'stocks',
      key: 'stocks',
      isEdit: true,
      renderEdit: getEdit,
    },
    {
      title: 'ACTIONS',
      dataIndex: 'actions',
      key: 'actions',
      headerClass: 'text-center',

      render: getActions,
    },
  ];
  return columns;
}
