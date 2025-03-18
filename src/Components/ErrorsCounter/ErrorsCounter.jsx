import './ErrorsCounter.css'

let maxNumber = 0;
function LimitCountSize(size){
    if (size > maxNumber) {
        return maxNumber;
    }
    else {
        return size;
    }
}

function ErrorsCounter({ normalCount, errorCount, className, maxNumberSpecified }) {
    maxNumber = maxNumberSpecified;
    return (
        <div className={className}>
            <p className={errorCount === 0 ? "count error-count" : "count error-count-active"}>{LimitCountSize(errorCount)}</p>
            <p className={normalCount != 0 &&
                normalCount >= maxNumberSpecified &&
                          errorCount === 0 ? "count success-count" : "count"}>{LimitCountSize(normalCount)}</p>
      </div>
  );
}

export default ErrorsCounter;