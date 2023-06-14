const Box = ({ children, fontColor}) => {
    return (
        <div className='box' style={{fontColor : fontColor}}>
            {children}
        </div>
    );
}
export default Box;