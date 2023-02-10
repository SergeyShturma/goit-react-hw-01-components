import data from 'json/data'
import { Title } from './Title/Title'
import { Stats } from './Stats/Stats'
import s from 'components/Statistics/Statistics.module.css'

export const Statistics = () => {
    return <section className={s.statistics}>
        <Title text="Upload stats" />
        <Stats stats={data} />
    </section >
}