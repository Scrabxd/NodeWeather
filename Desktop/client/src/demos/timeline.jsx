import React from 'react';

const Timeline = (props) => {
    return (
        <section class="timeline">
            <ol>
                <li>
                    <div>
                        <time>1934</time>
                        Some content here
                    </div>
                </li>
                <li></li>
            </ol>
            <div class="arrows">
                <button class="arrow arrow_prev disabled" disabled>
                  <img alt="Desonocido"></img>
                </button>
                <button class="arrow arrow_prev disabled" disabled>
                  <img alt="Desonocido"></img>
                </button>
            </div>
        </section>
    )
}

export default Timeline;
