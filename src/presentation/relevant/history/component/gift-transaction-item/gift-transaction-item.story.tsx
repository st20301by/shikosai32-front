// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { GiftTransactionItem } from './gift-transaction-item.presenter';

type Story = ComponentStoryObj<typeof GiftTransactionItem>;

const meta: ComponentMeta<typeof GiftTransactionItem> = {
  component: GiftTransactionItem,
  args: {
    id: 'this-is-transaction-id-12345',
    isDelivered: false,
    createdAt: new Date(),
    deliveredAt: new Date(),
    exchangedItem: {
      name: 'ベビースターラーメン',
    },
    receiver: {
      id: 'this-is-user-id-12345',
      name: 'ユーザー名',
      iconUrl: '/icons/fox.png',
    },
    className: 'max-w-2xl',
  },
  argTypes: {
    id: {
      description: '景品交換の取引(`GiftHistory`)のIDを指定する。表示はされないが、内部でコンポーネントの`key`として使用される。',
      control: { type: 'string' },
    },
    isDelivered: {
      description: '景品が受け渡し済みかどうかを指定する。',
      control: { type: 'boolean' },
    },
    createdAt: {
      description: '景品交換の取引(`GiftHistory`)が作成された日時を指定する。',
      control: { type: 'date' },
    },
    deliveredAt: {
      description: '景品交換の取引(`GiftHistory`)が受け渡し済みになった日時を指定する。',
      control: { type: 'date' },
    },
    receiver: {
      description: '景品交換の取引(`GiftHistory`)を行ったユーザーを指定する。',
      control: { type: 'object' },
    },
    exchangedItem: {
      description: '景品交換の取引(`GiftHistory`)で交換された景品を指定する。',
      control: { type: 'object' },
    },
    onSubmit: {
      description:
        '景品交換の取引(`GiftHistory`)を受け渡し済みにする、もしくは取り消すボタンを押したときに、その`id`と新しい状態`isDelivered`とともに呼び出されるイベントハンドラを指定する。',
      control: { type: 'function' },
    },
    className: {
      description: 'サイズを変更するために用意されている。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {};
