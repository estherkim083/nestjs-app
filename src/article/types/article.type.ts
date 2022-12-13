import { ArticleEntity } from '../Article.entity';

export type ArticleType = Omit<ArticleEntity, 'updateTimestamp'>;
