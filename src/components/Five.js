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

        </div>
       
    )
}

export default Five;