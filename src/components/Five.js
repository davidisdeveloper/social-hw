import styles from '../App.module.css';

function Five() {
    return(
        <div className={styles.NumOne}>
            
            <p className={styles.c_title}>열대저기압(태풍)의 특징</p>
            <br />
            <p className={styles.con}>2. 바닷속 산소 공급</p>
            <br />
            <p className={styles.con}>3. 지구의 열 순환</p>
            
            <img className={styles.img} src="https://t1.daumcdn.net/cfile/tistory/9925C6365B695A0006" alt="" />
            <br />
            <p className={styles.con}>4. 태풍 피해 사례</p>
            <br />
            <iframe className={styles.con} width="700" height="400" src="https://www.youtube.com/embed/8qu89-4CmWU" title="대한민국을 강타한 역대 최악의 태풍들 Top 6 !!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Five;