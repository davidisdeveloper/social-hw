import styles from '../App.module.css';

function Two() {
    return(
        <div className={styles.NumOne}>
            
            <p className={styles.c_title}>열대저기압 vs 태풍</p>
            <br />
            <p className={styles.con}>열대저기압: 수온이 높은 바다에서 발생하는 저기압</p>
            <br />
            <p className={styles.con}>태풍: 열대 저기압 중에서 중심 부근의 최대 풍속이 17m/s 이상인 것</p>

            <img className={styles.img} src="https://mblogthumb-phinf.pstatic.net/MjAyMDA5MDFfMjkz/MDAxNTk4OTUxMjkwNjU5.mCLRlxMaWJ0efK002n-OwvJ9wSUYqxPWe4nPNu8oCZYg.rQJjoAxUsrwcy9QgxYY2DNcJitkIv8JEK5yU9iHmarsg.JPEG.vixlee/0-%EC%97%B4%EB%8C%80%EC%84%B1%EC%A0%80%EA%B8%B0%EC%95%95-%EA%B5%AD%EA%B0%80%ED%83%9C%ED%92%8D%EC%84%BC%ED%84%B0.jpg?type=w2" alt="" />
        </div>
    )
}

export default Two;