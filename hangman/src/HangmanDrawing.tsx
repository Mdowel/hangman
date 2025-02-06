const HEAD = (
    <div style={{
        width: '40px',
        height: '45px',
        borderRadius: '50%',
        border: '10px solid black',
        position: 'absolute',
        top: '50px',
        right: '-25px'
    }} />
)

const BODY = (
    <div style={{
        width: '10px',
        height: '80px',
        background: 'black',
        position: 'absolute',
        top: '105px',
        right: '0px'
    }} />
)

const RIGHT_ARM = (
    <div style={{
        width: '90px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '150px',
        right: '-85px',
        rotate: '-30deg',
        transformOrigin: 'left bottom'
    }} />
)

const LEFT_ARM = (
    <div style={{
        width: '90px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '150px',
        right: '5px',
        rotate: '30deg',
        transformOrigin: 'right bottom'
    }} />
)

const RIGHT_LEG = (
    <div style={{
        width: '80px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '175px',
        right: '-70px',
        rotate: '60deg',
        transformOrigin: 'left bottom'
    }} />
)

const LEFT_LEG = (
    <div style={{
        width: '80px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '175px',
        right: '0px',
        rotate: '-60deg',
        transformOrigin: 'right bottom'
    }} />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export function HangmanDrawing({ numberOfGuesses }: 
HangmanDrawingProps) {
    return (
        <div style={{ position: 'relative' }}>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div style={{ height: '50px', width: '10px', background: 'black', position: 'absolute', top: 0, right: 0 }}/>
            <div style={{ height: '10px', width: '175px', background: 'black', marginLeft: '100px' }}/>
            <div style={{ height: '320px', width: '10px', background: 'black', marginLeft: '100px' }}/>
            <div style={{ height: '10px', width: '210px', background: 'black'}}/>
        </div>
    )
}