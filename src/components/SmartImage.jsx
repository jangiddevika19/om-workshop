import { useState } from 'react';
import { FaImage } from 'react-icons/fa';

/**
 * Image with graceful fallback. If the file in /public/images is missing,
 * a neutral placeholder is shown instead of a broken-image icon.
 * Parent should have the `group` class to enable hover zoom via `zoom`.
 */
export default function SmartImage({ src, alt, className = '', zoom = false, eager = false, position = 'center', fit = 'cover', plain = false, fallback = null }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`relative overflow-hidden ${plain ? 'bg-cream-deep' : 'hatch'} ${className}`}>
      {failed ? (
        <div role="img" aria-label={alt} className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-steel/60">
          {fallback || <FaImage className="text-2xl" aria-hidden="true" />}
          {!fallback && import.meta.env.DEV && <span className="px-3 text-center font-body text-[11px]">{src}</span>}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          fetchpriority={eager ? 'high' : 'auto'}
          decoding="async"
          onError={() => setFailed(true)}
          style={{ objectPosition: position }}
          className={`h-full w-full ${fit === 'contain' ? 'object-contain' : 'object-cover'} ${zoom ? 'transition-transform duration-700 ease-out group-hover:scale-105' : ''}`}
        />
      )}
    </div>
  );
}
