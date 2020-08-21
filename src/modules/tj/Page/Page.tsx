import React, { FC } from 'react'
import styles from './Page.css'
import { ArticleHeader } from '../ArticleHeader/ArticleHeader'
import { PageMenu } from '../PageMenu/PageMenu'
import { LayoutSupernova } from '../LayoutSupernova/LayoutSupernova'
import { Lead } from '../Lead/Lead'
import { Paragraph } from '../Paragraph/Paragraph'
import { Author } from '../Author/Author'
import { TextBody } from '../TextBody/TextBody'
import { Fact } from '../Fact/Fact'
import { Quiz } from '../Quiz/Quiz'
import { Tags } from '../Tags/Tags'
import { Share } from '../Share/Share'
import { CommentsLayout } from '../CommentsLayout/CommentsLayout'
import { Mailing } from '../Mailing/Mailing'
import { Swiper } from '../Swiper/Swiper'
import { CollectionHeader } from '../CollectionHeader/CollectionHeader'
import { CollectionBlock } from '../CollectionBlock/CollectionBlock'
import { CollectionName } from '../CollectionName/CollectionName'
import { CollectionWrapper } from '../CollectionWrapper/CollectionWrapper'
import { CollectionBlocksWrapper } from '../CollectionBlocksWrapper/CollectionBlocksWrapper'
import pluralize from 'plural-ru'
import { CollectionLine } from '../CollectionLine/CollectionLine'
import { CollectionLineWrapper } from '../CollectionLineWrapper/CollectionLineWrapper'
import { CollectionButton } from '../CollectionButton/CollectionButton'
import { Footer } from '../Footer/Footer'

type PageProps = {}
export const Page: FC<PageProps> = () => {

  const plur = (num: number) => {
    return pluralize(num, 'статья', 'статьи', 'статей') 
  }

  return (
    <div className={ styles.page }>
      <LayoutSupernova>
        <PageMenu />
        <ArticleHeader>
          Почему в России невыгодно быть богатым?
        </ArticleHeader>
        <Paragraph 
          right={(
            <Author summary='мечтает о кондиционере'>
              Лама Ламовна
            </Author>
          )}
        >
          <Lead>Русскоговорящий специалист с востребованной профессией может зарабатывать в России большие деньги. Но зачем?
          </Lead>
        </Paragraph>
        <Paragraph
          right={(
            <Fact link='https://journal.tinkoff.ru/austria/'>
              Какого богатства вы достойны?
            </Fact>
          )}
        >
          <TextBody>
          Чтобы жить за трехметровым забором в коттеджном поселке? Но вы все равно попадете на улицу, по которой ходят озлобленные затравленные люди с зарплатой 15 тысяч рублей. При случае они разнесут ваш дом, а вас вздернут рядом. Вы будете покупать те же продукты, только переплачивая раз в 10, потому что они продаются в «элитных» супермаркетах. Не возить же еду из-за границы каждую неделю.
          </TextBody>
        </Paragraph>
        <Paragraph>
          <TextBody>
        Даже в заведениях высокого класса вас все равно будут встречать с читаемой во взгляде фразой «Вас много, а я одна/один»: никакие регламенты по улыбкам не победят этот менталитет. Помню, даже в элитном фитнес-клубе администратор с места кричала: «Женщина, вы куда идете!» Никто не настроен сохранить вас как клиента: все хотят взять с вас по максимуму здесь и сейчас.
          </TextBody>
        </Paragraph>
        <Paragraph>
          <TextBody>
        Бесплатную медицину вы минуете, а в частных клиниках у вас найдут массу заболеваний: всем ведь нужны деньги. Ни один врач не скажет, что у вас переутомление, и не посоветует просто ничего не делать, спать, есть и гулять. Нет, вас будут лечить, куда же вы денетесь.
          </TextBody>
        </Paragraph>
        <Paragraph>
          <TextBody>
        А если вдруг уважаемым людям ваш бизнес, дом или даже семья покажутся привлекательными — или наоборот, — все будет «отжато» в кратчайшие сроки. Был бы человек — а дело завести найдут за что. Некоторые откупаются, но это не может продолжаться бесконечно: на все денег не хватит. И зачем эти крысиные бега вместо того, чтобы просто жить?
          </TextBody>
        </Paragraph>
        <Paragraph>
          <Quiz>
          Хотели бы вы стать по-настоящему богатым?
          </Quiz>
        </Paragraph>
        <Tags />
        <Share />
        <CommentsLayout />
        <Mailing
          title='Море полезных статей о финансах'
          subtitle='В вашей почте дважды в неделю. Рассказываем только о том, что касается вас и ваших денег'
        />
        <Swiper
          title='Деньги деньги деньги деньги богатство богатство деньги'
        />
        <CollectionWrapper>
          <CollectionHeader>
            Подборки по теме
          </CollectionHeader>
          <CollectionBlocksWrapper>
            <CollectionBlock>
              <CollectionName 
                link='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'
                image='https://www.straightpath.solutions/wp-content/uploads/2019/07/how-to-sell-online-1.png'
                counter={ `95 ${ plur(95) }` }
                >
                  Дневники трат
              </CollectionName>
              <CollectionLineWrapper>
                <CollectionLine link='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
                    Научный сотрудник в Москве с общим доходом семьи 350&nbsp;000&nbsp;₽ в месяц
                </CollectionLine>
                <CollectionLine link='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
                    Менеджер в Екатеринбурге после сокращения
                </CollectionLine>
                <CollectionLine link='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
                    Разработчик в Лондоне, 3800&nbsp;£
                </CollectionLine>
                <CollectionLine link='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
                    Руководитель интернет-проектов в Москве, 100&nbsp;000&nbsp;₽
                </CollectionLine>
                <CollectionLine link='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
                    Научный сотрудник в Новосибирске, 38&nbsp;000&nbsp;₽
                </CollectionLine>
              </CollectionLineWrapper>
              <CollectionButton 
                link='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'
              >
                Еще 90
              </CollectionButton>
            </CollectionBlock>
            <CollectionBlock>
              <CollectionName 
                link='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'
                image='https://cms-assets.tutsplus.com/uploads/users/158/posts/29706/final_image/PiggyBank0.jpg'
                counter={ `9 ${ plur(9) }` }
                >
                  Как копить больше
              </CollectionName>
              <CollectionLineWrapper>
                <CollectionLine link='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
                    Как накопить на старость
                </CollectionLine>
                <CollectionLine link='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
                    Как научиться копить
                </CollectionLine>
                <CollectionLine link='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
                    Как хранить накопления
                </CollectionLine>
                <CollectionLine link='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
                    Как откладывать больше с каждым годом
                </CollectionLine>
              </CollectionLineWrapper>
            </CollectionBlock>
            <CollectionBlock>
              <CollectionName 
                link='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'
                image='https://previews.123rf.com/images/rastudio/rastudio1703/rastudio170300044/73065263-%E7%99%BD%E4%BA%BA%E3%81%AE%E9%85%8D%E9%81%94%E4%BE%BF%E3%81%8C%E6%AE%B5%E3%83%9C%E3%83%BC%E3%83%AB%E7%AE%B1%E3%81%A7%E3%83%88%E3%83%AD%E3%83%AA%E3%83%BC%E3%82%92%E6%8A%BC%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%E8%8B%A5%E3%81%84%E9%85%8D%E9%81%94%E5%AE%85%E9%85%8D%E4%BE%BF%E6%8C%81%E6%A0%AA%E3%82%AF%E3%83%AA%E3%83%83%E3%83%97%E3%83%9C%E3%83%BC%E3%83%89%E3%80%82%E5%AE%85%E9%85%8D%E4%BE%BF%E3%81%AE%E9%85%8D%E9%81%94%E7%94%A8%E3%83%90%E3%83%B3%E3%81%AE%E5%89%8D%E3%81%AB%E7%AB%8B%E3%81%A3%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%83%99%E3%82%AF%E3%83%88%E3%83%AB-%E3%83%95%E3%83%A9%E3%83%83.jpg'
                counter={ `32 ${ plur(32) }` }
                >
                  Зарплаты читателей
              </CollectionName>
              <CollectionLineWrapper>
                <CollectionLine link='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
                    Инженер-электроник
                </CollectionLine>
                <CollectionLine link='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
                    Редактор в издательстве
                </CollectionLine>
                <CollectionLine link='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
                    Cвященник
                </CollectionLine>
                <CollectionLine link='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
                    Диджитал-специалисты
                </CollectionLine>
                <CollectionLine link='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
                    Мерчендайзер в магазине одежды
                </CollectionLine>
              </CollectionLineWrapper>
              <CollectionButton 
                link='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'
              >
                Еще 27
              </CollectionButton>
            </CollectionBlock>
            <CollectionBlock>
              <CollectionName 
                link='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'
                image='https://image.freepik.com/free-vector/trophy-cup-flat-icon_33893-565.jpg'
                counter={ `4 ${ plur(4) }` }
                >
                  Лучшие статьи Т—Ж
              </CollectionName>
              <CollectionLineWrapper>
                <CollectionLine link='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
                    Куда вложить 100 000 рублей
                </CollectionLine>
                <CollectionLine link='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
                    Как вести бюджет
                </CollectionLine>
                <CollectionLine link='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
                    Как прожить на 5000 рублей
                </CollectionLine>
                <CollectionLine link='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
                    Куда вкладывать до 30 лет
                </CollectionLine>
                <CollectionLine link='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
                    Как научить ребенка копить
                </CollectionLine>
              </CollectionLineWrapper>
              <CollectionButton 
                link='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'
              >
                Еще 4
              </CollectionButton>
            </CollectionBlock>
          </CollectionBlocksWrapper>
        </CollectionWrapper>
        <Footer />
      </LayoutSupernova>
    </div>
  )
}
