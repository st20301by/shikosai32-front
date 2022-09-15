import type { FC } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { Button, ButtonIcon } from '@/components/Button';
import type { ButtonProps } from '@/components/Button';
import { Link } from '@/components/Link';
import { Modal, ModalOverlay, ModalContent } from '@/components/Modal';
import twMerge from '@/libs/twmerge';

export type HamburgerMenuProps = Omit<ButtonProps, 'children'>;

export const HamburgerMenu: FC<HamburgerMenuProps> = ({ className, ...props }) => (
  <Modal
    trigger={
      <Button className={twMerge('', className)} {...props} ghost circle>
        <ButtonIcon>
          <GiHamburgerMenu />
        </ButtonIcon>
      </Button>
    }
  >
    <ModalOverlay className="flex-col items-center justify-between bg-gradient-to-br p-8 gradient-hamburger">
      <Button className="absolute top-6 right-6" ghost circle>
        <ButtonIcon>
          <GrClose />
        </ButtonIcon>
      </Button>
      <ModalContent className="mt-32 w-auto items-center gap-8 bg-transparent text-2xl text-neutral-900 shadow-none">
        <Link href="https://example.com">ランキング</Link>
        <Link href="https://example.com">ゲーム一覧</Link>
        <Link href="https://example.com">景品交換</Link>
        <Link href="https://example.com">スタッフ</Link>
      </ModalContent>
      <span className="text-sm font-bold">画面外をタップして閉じる</span>
    </ModalOverlay>
  </Modal>
);