import { useCheckUserExistanceQuery } from '@/infra/graphql/generated/graphql';
import type { User } from '@/model/user/user.model';

export type UseCheckUserExistanceUseCaseProps = Partial<Pick<User, 'id'>>;

// Firebase Auth提供の認証情報のユーザーのIDに対応したユーザー情報が、サーバーに登録されているかどうかを取得する
export const useCheckUserExistanceUseCase = ({ id }: UseCheckUserExistanceUseCaseProps): boolean | undefined | null => {
  const [result] = useCheckUserExistanceQuery({
    variables: { id: id || '**idが未指定のときはQueryは送られません**' },
    pause: !id,
    requestPolicy: 'cache-and-network',
  });
  if (result.error) return null;
  if (result.fetching) return undefined;
  return !!id && !!result.data?.findUser?.id;
};
