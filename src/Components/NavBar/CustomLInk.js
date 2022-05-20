import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLInk = ({children, to, ...props}) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
        <Link
          style={{ fontWeight: match ? "bold" : "400" }}
          to={to}
          {...props}
        >
          {children}
        </Link>

      </div>
    );
};

export default CustomLInk;