import { Module } from '@nestjs/common'
import { I18nJsonParser, I18nModule, QueryResolver } from 'nestjs-i18n'
import path from 'path'

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      parser: I18nJsonParser,
      parserOptions: {
        path: path.join(__dirname, '../i18n/'),
        // add this to enable live translations
        //watch: true,
      },
      resolvers: [{ use: QueryResolver, options: ['lang', 'locale', 'l'] }],
    }),
  ],
})
export class AppI18nModule {}
